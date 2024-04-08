import { useCallback, useEffect, useRef, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useDebounce } from "react-use"
import { Spinner } from "../../shared/components/Spinner"
import { MovieCard } from "./components/MovieCard"
import { Search } from "./components/Search"
import styles from "./index.module.scss"
import { getMovies } from "./services/movies"
import EmptyState from "../../shared/components/EmptyState"
import { useNavigate, useSearchParams } from "react-router-dom"

export function Home() {
  const navigate = useNavigate()
  const searchRef = useRef<HTMLInputElement>(null)
  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")
  const { data: movies, isLoading: isFetchingMovies } = useQuery({
    queryKey: ["GET_MOVIES", debouncedSearch],
    queryFn: () => getMovies(debouncedSearch),
  })
  const isLoading = isFetchingMovies
  const [searchParams] = useSearchParams()

  const handleChangeSearch = useCallback((value?: string) => {
    if (!value) {
      return
    }

    setSearch(value)
  }, []);

  const handleHomeContent = useCallback(() => {
    if (!movies?.length) {
      return <EmptyState />
    }

    return (
      <>
        <Search ref={searchRef} onChange={() => handleChangeSearch(searchRef.current?.value)} onSubmit={() => {
          if (searchRef?.current)
            handleChangeSearch(searchRef.current?.value)
        }} />

        <div className={styles.cardsContainer}>
          {movies?.map(movie => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              price={movie.price}
              cover={movie.image}
            />
          ))}
        </div>
      </>
    )
  }, [movies, handleChangeSearch]);

  useDebounce(() => {
    setDebouncedSearch(search)
  }, 3000, [search])

  useEffect(() => {
    const searchQuery = searchParams.get('search-query')

    if (!searchQuery)
      return

    setDebouncedSearch(searchQuery)
  }, [searchParams])

  useEffect(() => {
    if (!debouncedSearch)
      return

    navigate(`/search?search-query=${debouncedSearch}`)
  }, [debouncedSearch, navigate])

  return (
    <div className={styles.container}>
      {isLoading ? <Spinner /> : <>{handleHomeContent()}</>}
    </div>
  )
}

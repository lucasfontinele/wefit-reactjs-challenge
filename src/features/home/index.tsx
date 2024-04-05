import { useQuery } from "@tanstack/react-query"
import { ChangeEvent, useCallback, useState } from "react"
import { useDebounce } from "react-use"
import { Spinner } from "../../shared/components/Spinner"
import { MovieCard } from "./components/MovieCard"
import { Search } from "./components/Search"
import styles from "./index.module.scss"
import { getMovies } from "./services/movies"
import EmptyState from "../../shared/components/EmptyState"

export function Home() {
  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const { data: movies, isLoading: isFetchingMovies } = useQuery({
    queryKey: ["GET_MOVIES", debouncedSearch],
    queryFn: () => getMovies(debouncedSearch),
  })
  const isLoading = isFetchingMovies;

  const handleChangeSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      return;
    }

    setSearch(e.target.value)
  }, []);

  const handleHomeContent = useCallback(() => {
    if (!movies?.length) {
      return <EmptyState />
    }

    return (
      <>
        <Search onChange={handleChangeSearch} />

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
  }, 500, [search])

  return (
    <div className={styles.container}>
      {isLoading ? <Spinner /> : <>{handleHomeContent()}</>}
    </div>
  )
}

import { useQuery } from "@tanstack/react-query"
import { Spinner } from "../../shared/components/Spinner"
import { MovieCard } from "./components/MovieCard"
import { Search } from "./components/Search"
import styles from "./index.module.scss"
import { getMovies } from "./services/movies"

export function Home() {
  const { data: movies, isLoading: isFetchingMovies } = useQuery({
    queryKey: ["GET_MOVIES"],
    queryFn: getMovies,
  })
  const isLoading = isFetchingMovies;

  return (
    <div className={styles.container}>
      <Search />

      {isLoading ? <Spinner /> : (
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
      )}
    </div>
  )
}

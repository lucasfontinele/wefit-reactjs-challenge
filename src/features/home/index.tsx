import { Spinner } from "../../shared/components/Spinner"
import { MovieCard } from "./components/MovieCard"
import { Search } from "./components/Search"
import styles from "./index.module.scss"

export function Home() {
  return (
    <div className={styles.container}>
      <Search />

      <Spinner />

      <div className={styles.cardsContainer}>
        <MovieCard
          title="Viúva negra"
          price={200}
          cover="https://image.tmdb.org/t/p/w500/1q6z0x000000000000000000000000000000.jpg"
        />
        <MovieCard
          title="Viúva negra"
          price={200}
          cover="https://image.tmdb.org/t/p/w500/1q6z0x000000000000000000000000000000.jpg"
        />
        <MovieCard
          title="Viúva negra"
          price={200}
          cover="https://image.tmdb.org/t/p/w500/1q6z0x000000000000000000000000000000.jpg"
        />
        <MovieCard
          title="Viúva negra"
          price={200}
          cover="https://image.tmdb.org/t/p/w500/1q6z0x000000000000000000000000000000.jpg"
        />
      </div>
    </div>
  )
}

import { MovieCard } from "./MoviesCard";
import movies from "./Movies.json";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  return (
    <ul className={styles.MoviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
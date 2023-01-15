import styles from "./MoviesCard.module.css";

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.MoviesCard}>
      <img
        width={230}
        height={345}
        className={styles.MoviesImage}
        src={imageUrl}
        alt={movie.title}
      />
      <div>{movie.title}</div>
    </li>
  );
}
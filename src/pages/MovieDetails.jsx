import styles from "../css/MovieDetails.module.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

export function MovieDetails() {
  //Para los parámetros de URL :movieId (con hooks de React-Router-Dom)
  const { movieId } = useParams();

  //PARA ACTUALIZAR EL ESTADO EN UNA PELICULAS
  const [movie, setMovie] = useState(null);

  //Llamada a la API de TMDB
  //Hooks de React para llamada asíncrona
  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]); //Se pasa arreglo de dependencias con el ID de la pelicula para modificar el estado

  if(!movie){
    return null;
  }
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}

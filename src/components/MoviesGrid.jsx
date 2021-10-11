import { MovieCard } from "./MovieCard";
import styles from "../css/MoviesGrid.module.css";
import { useEffect, useState } from "react"; //Hooks de React
import { get } from "../utils/httpClient";

export function MoviesGrid() {
  //PARA ACTUALIZAR LAS PELICULAS SE USAN LOS ESTAODS
  //const movieState devolverá un arreglo, en la 1era posición están las películas y 2a una función

  //const moviesState = useState([]);//para modificar el estado (listado de películas)
  //const movies = moviesState[0]; //Se asigna a la constante el listado de películas del array en pos. 0
  //const setMovies = moviesState[1];//Se crea la función que permite modificar el estado (listado de películas)

  //OTRA FORMA MEJOR DE HACER LÍNEAS 11-12
  //const [movies, setMovies] = movieState;

  //PERO LA MEJOR FORMA ES HACER EL DESTRUCTURING DIRECTO EN const DE LA LÍNEA 10
  const [movies, setMovies] = useState([]); //para modificar el estado (listado de películas)

  //Llamada a la API de TMDB
  //Hooks de React para llamada asíncrona
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []); //Se pasa arreglo de dependencias vacío para que el fetch no se ejecute en loop

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

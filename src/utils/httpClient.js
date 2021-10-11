const API = "https://api.themoviedb.org/3";

export function get(path) {
  //Efecto secundario Hook
  return fetch(API + path, {
    headers: {
      //Acces token
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGQzZTBkYWM3M2VkMTQ4M2Q0M2QzODk0N2IyMmY1ZSIsInN1YiI6IjYxNjQ3ZTdjZDE4ZmI5MDAyMGZmZGU0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.54UdC0hhcahvr1pzWNxqX9oITq04OeXc_wYf3iVbtJ0",
      "Content-Type": "application/json;charset=utf-8",
    },
  }) //Encadenando resultados de la promesa
    .then((result) => result.json());
}

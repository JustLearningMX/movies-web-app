import { MoviesGrid } from "./MoviesGrid";
import styles from "../css/App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "../pages/MovieDetails";

export function App() {
  return (
    <Router>
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <Switch>
          <Route path="/movie">
            <MovieDetails />
          </Route>
          <Route path="/">
            <MoviesGrid />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

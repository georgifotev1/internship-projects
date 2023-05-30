import { Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { IMovie } from "../../types/movies";
import { PosterCard } from "../PosterCard/PosterCard";
import "./search.css";

export const Search = () => {
  const movies: IMovie[] = useLocation().state.filter(
    (movie: IMovie) => movie.poster_path !== null
  );

  return (
    <div className="search-page">
      {movies.length > 0 ? (
        <>
          <h2 className="search-title">Movie List</h2>
          <Row className="search-results">
            <PosterCard posters={movies} />
          </Row>
        </>
      ) : (
        <h2 className="search-title">No results found</h2>
      )}
    </div>
  );
};

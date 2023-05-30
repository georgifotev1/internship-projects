import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "../../constants";
import { IMovie } from "../../types/movies";

export const PosterCard = ({ posters }: { posters: IMovie[] }) => {
  return (
    <>
      {posters.map((movie, index) => (
        <Col className="category-movie" key={`Movie ${index}`}>
          <Link
            to={`/movie/${movie.id}`}
            state={{
              id: movie.id,
            }}
          >
            <img
              className="movie-poster"
              src={`${IMAGE_URL}/w185${movie.poster_path}`}
              alt={`${movie.title}`}
            />
          </Link>
        </Col>
      ))}
    </>
  );
};

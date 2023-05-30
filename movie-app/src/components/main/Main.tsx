import "./main.css";
import { useGetMovies } from "../../hooks/fetch-data-hooks";
import { useState, useEffect } from "react";
import { IMovie } from "../../types/movies";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { PosterCard } from "../PosterCard/PosterCard";
import { SpinnerComponent } from "../spinner/Spinner";
import { IMAGE_URL } from "../../constants";

export const Main = () => {
  const [allCategories, setAllCategories] = useState<IMovie[][]>();
  const [headerMovie, setHeaderMovie] = useState<IMovie>();
  const [isLoading, setIsLoading] = useState(false);
  const categoryHeading = [
    "Trending Movies",
    "Popular Movies",
    "Top Rated Movies",
    "Action Movies",
    "Comedy Movies",
    "Crime Movies",
    "Horror Movies",
    "Documentary Movies",
  ];
  useEffect(() => {
    async function FetchData() {
      setIsLoading(true);
      const randomNumber = Math.round(Math.random() * 19);
      const categoriesUrls = [
        "/trending/movie/week?",
        "/movie/popular?",
        "/movie/top_rated?",
        "/discover/movie?with_genres=28&",
        "/discover/movie?with_genres=35&",
        "/discover/movie?with_genres=80&",
        "/discover/movie?with_genres=27&",
        "/discover/movie?with_genres=99&",
      ];
      const categories = await useGetMovies(categoriesUrls);
      setAllCategories(categories);
      setHeaderMovie(categories[0][randomNumber]);
      setIsLoading(false);
    }
    FetchData();
  }, []);

  return (
    <div className="content">
      {isLoading && <SpinnerComponent />}
      {headerMovie && allCategories && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `linear-gradient(0deg, rgb(20, 20, 20) 4%, rgba(20, 20, 20, 0.46) 100%),
            url(${IMAGE_URL}/w1280${headerMovie.backdrop_path})`,
            }}
          >
            <div className="banner-content">
              <h1 className="title">{headerMovie.title}</h1>
              <Link
                to={`movie/${headerMovie.id}`}
                state={{
                  id: headerMovie.id,
                }}
              >
                <button className="banner-btn">Details</button>
              </Link>
              <p className="banner-description">
                {headerMovie.overview.substring(0, 150) + "..."}
              </p>
            </div>
          </div>
          <div className="categories">
            {allCategories.map((category, index) => (
              <div className="category" key={`Category ${index}`}>
                <h2 className="category-title">{categoryHeading[index]}</h2>
                <Row className="category-movies">
                  <PosterCard posters={category} />
                </Row>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

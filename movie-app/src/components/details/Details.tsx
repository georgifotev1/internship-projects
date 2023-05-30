import "./details.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetMovieById } from "../../hooks/fetch-data-hooks";
import { IMovieDetails } from "../../types/movie-details";
import { StaffCard } from "../StaffCard/StaffCard";
import { PosterCard } from "../PosterCard/PosterCard";
import { SpinnerComponent } from "../spinner/Spinner";
import { IMAGE_URL } from "../../constants";
import { toHoursAndMinutes } from "../../utils/toMinutesAndHours";
export const Details = () => {
  const {
    state: { id },
  } = useLocation();
  const [movie, setMovie] = useState<IMovieDetails>();
  const [isLoading, setIsLoading] = useState(false);
  const [playTrailer, setPlayTrailer] = useState(false);

  useEffect(() => {
    async function GetMovie() {
      setIsLoading(true);
      const response = await useGetMovieById(id);
      setMovie(response);
      setIsLoading(false);
    }
    GetMovie();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        <div className="movie-details">
          {movie && (
            <div
              className="backdrop"
              style={{
                backgroundImage: `linear-gradient(0deg, rgb(20, 20, 20) 4%, rgba(20, 20, 20, 0.46) 100%),
            url(${IMAGE_URL}/w1280${movie.backdrop_path})`,
              }}
            >
              <div className="details-info">
                <div>
                  <img
                    className="poster"
                    src={`${IMAGE_URL}/w342${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
                <div className="main-info">
                  <h1 className="main-info-title">
                    {movie.title}
                    <span>({movie.release_date.slice(0, 4)})</span>
                  </h1>
                  <p className="director details">
                    Directed by{" "}
                    <span className="director-span">
                      {
                        movie.credits.crew.find(
                          (movie) => movie.job === "Director"
                        )?.name
                      }
                    </span>
                  </p>
                  <p className="runtime details">
                    {toHoursAndMinutes(movie.runtime)}
                  </p>
                  <div className="details-genres details">
                    {movie.genres.map((genre, index, genres) => (
                      <p key={`Genre ${index}`} className="details-genre">
                        {genre.name}
                        {index !== genres.length - 1 && (
                          <span>&nbsp;|&nbsp;</span>
                        )}
                      </p>
                    ))}
                  </div>
                  <div className="play-trailer details">
                    <button
                      className="banner-btn"
                      onClick={() => setPlayTrailer(true)}
                    >
                      Play Trailer
                    </button>
                  </div>
                  <div>
                    <p className="overview details">{movie.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="cast">
            <h2 className="subtitle">Cast</h2>
            <div className="profile">
              {movie?.credits.cast.slice(0, 9).map((person, index) => (
                <StaffCard
                  person={person}
                  personDetails={person.character}
                  key={`Cast card ${index}`}
                />
              ))}
            </div>
          </div>
          <div className="crew">
            <h2 className="subtitle">Crew</h2>
            <div className="profile">
              {movie?.credits.crew.slice(0, 9).map((person, index) => (
                <StaffCard
                  person={person}
                  personDetails={person.job}
                  key={`Crew card ${index}`}
                />
              ))}
            </div>
          </div>
          <div className="more-like-this">
            <h2 className="subtitle">More Like This</h2>
            <div className="profile">
              {movie && (
                <PosterCard posters={movie.similar.results.slice(0, 4)} />
              )}
            </div>
          </div>
        </div>
      )}
      {playTrailer && movie && (
        <div className="trailer">
          <div className="modal-video" onClick={() => setPlayTrailer(false)}>
            <div className="modal-video-body">
              <div className="modal-video-inner">
                <div className="modal-video-movie-wrap">
                  <button
                    onClick={() => setPlayTrailer(false)}
                    className="modal-video-close-btn"
                  ></button>
                  <iframe
                    src={`//www.youtube.com/embed/${
                      movie?.videos.results.find(
                        (video) => video.type === "Trailer"
                      )?.key
                    }?autoplay=1&cc_load_policy=1&controls=1&disablekb=0&enablejsapi=0&fs=1&iv_load_policy=1&loop=0&rel=0&showinfo=1&start=0&wmode=transparent&theme=dark&mute=0`}
                    title="video"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

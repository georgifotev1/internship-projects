import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { searchMovie } from "../../hooks/fetch-data-hooks";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/debounce-hook";
import { IMovie } from "../../types/movies";

export const Header = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const [currentQuery, setCurrentQuery] = useState("");
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    if (debouncedQuery) {
      if (currentQuery !== debouncedQuery) {
        searchMovie(debouncedQuery).then((res: IMovie[]) => {
          navigate("/search", { state: res });
          setCurrentQuery(debouncedQuery);
        });
      }
    } else {
      if (currentQuery === "") return;
      navigate("/");
      setCurrentQuery("");
    }
  }, [debouncedQuery, currentQuery, navigate]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`nav${scrollPosition > 99 ? ` active` : ``}`}>
        <Link to={"/"}>
          <FontAwesomeIcon
            className="home"
            icon={faFilm}
            color="white"
            size="2x"
          />
        </Link>

        <form className="search">
          <input
            type="text"
            className="search-bar"
            placeholder="Search movie"
            onChange={(event) => {
              setQuery(event.target.value);
            }}
            onBlur={(event) => (event.target.value = "")}
          />
          <button disabled className="search-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          </button>
        </form>
      </div>
    </>
  );
};

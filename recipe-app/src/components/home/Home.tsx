import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./home.css";
import { SpinnerComponent } from "../spinner/Spinner";
import { Link } from "react-router-dom";
import { useGetRecipes } from "../../hooks/get-data-hook";
import { IResponse } from "../../types/response";

export const Home = () => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState<string>();
  const [fromPage, setFromPage] = useState(0);
  const [toPage, setToPage] = useState(9);
  const [data, setData] = useState<IResponse>();

  const onSubmit = async (data: any) => {
    setQuery(data["search-bar"]);
    setFromPage(0);
    setToPage(10);
  };

  useEffect(() => {
    async function FetchData() {
      setIsLoading(true);
      const response = await useGetRecipes(query, fromPage, toPage);
      setData(response);
      setIsLoading(false);
    }
    FetchData();
  }, [query, fromPage, toPage]);

  const handlePagination = (isNext: boolean) => {
    if (isNext) {
      setFromPage(fromPage + 10);
      setToPage(toPage + 10);
    } else {
      if (fromPage - 10 < 0) return;
      setFromPage(fromPage - 10);
      setToPage(toPage - 10);
    }
    window.scrollTo(0, 0);
  };

  if (data?.error) {
    console.log(data?.error);
  }

  return (
    <div className={`content`}>
      <h1>Enter an ingredient and get recipes!</h1>
      <form className="search" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="search-bar"
          {...register("search-bar")}
          placeholder="Avocado"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
      {isLoading && (
        <div className="spinner">
          <SpinnerComponent />
        </div>
      )}
      {data?.response && data?.response.length === 0 && (
        <div className="no-data">No recipies found for your search!</div>
      )}
      {data?.response && data?.response.length > 0 && !isLoading && (
        <>
          <div className="recipes">
            {data?.response.map((recipe, index) => (
              <Link
                to={`/${recipe.label.toLocaleLowerCase().split(" ").join("-")}`}
                className="recipe"
                key={`Reciper number${index}`}
                state={{
                  data: recipe,
                }}
              >
                <h2 className="recipe-title">{recipe.label}</h2>
                <img
                  className="recipe-image"
                  src={recipe.image}
                  alt="recipe-img"
                />
              </Link>
            ))}
          </div>
          <div className="pages">
            <div className="pagination">
              <button
                id="previous"
                className="btn"
                onClick={() => handlePagination(false)}
              >
                Previous Page
              </button>
            </div>
            <div className="pagination">
              <button
                id="next"
                className="btn"
                onClick={() => handlePagination(true)}
              >
                Next Page
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

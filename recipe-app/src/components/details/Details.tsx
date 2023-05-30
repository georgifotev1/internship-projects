import { useLocation } from "react-router-dom";
import { IRecipe } from "../../types/recipe";
import "./details.css";

export const Details = () => {
  const {
    state: { data },
  } = useLocation();
  const recipe: IRecipe = data;
  return (
    <div className="details">
      <div className="recipe-details">
        <div className="header">
          <h2 className="heading">{recipe.label}</h2>
          <img className="recipe-image" src={recipe.image} alt="recipe-img" />
        </div>
        <div className="info">
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredientLines.map((ingredient, index) => (
              <li key={`Ingredient ${index}`}>- {ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="info">
          <h3>Meal Type:</h3>
          {recipe.dishType.map((meal, index) => (
            <p key={`Meal type ${index}`}>{meal}</p>
          ))}
        </div>
        <div className="info">
          <h3>Total Calories:</h3>
          <p>{Math.round(recipe.calories)} kcal</p>
        </div>
        <div className="info">
          <h3>Total Weight:</h3>
          <p>{Math.round(recipe.totalWeight)} gr</p>
        </div>
        <div className="info">
          <h3>Recipe by:</h3>
          <p>{recipe.source}</p>
        </div>
      </div>
    </div>
  );
};

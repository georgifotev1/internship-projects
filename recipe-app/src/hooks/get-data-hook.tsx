import axios from "axios";
import { APP_ID, APP_KEY } from "../constants";

export async function useGetRecipes(
  query: string | undefined,
  fromPage: number,
  toPage: number
) {
  if (query !== undefined) {
    try {
      const res = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${fromPage}&to=${toPage}`
      );
      return {
        response: res.data.hits.map((el: any) => el.recipe),
      };
    } catch (err: any) {
      return { error: err.message };
    }
  }
}

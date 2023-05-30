import { IRecipe } from "./recipe";

export interface IResponse {
  response?: IRecipe[];
  error?: string | null;
}

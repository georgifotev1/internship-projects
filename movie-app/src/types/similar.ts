import { IMovie } from "./movies";

export interface ISimilar {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

import { ICast } from "./cast";
import { ICollection } from "./collection";
import { ICrew } from "./crew";
import { IGenres } from "./genres";
import { ILanguages } from "./languages";
import { IProductionCompanies } from "./production-companies";
import { IProductionCountries } from "./production-countries";
import { ISimilar } from "./similar";
import { IVideo } from "./video";

export interface IMovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | ICollection;
  budget: number;
  credits: {
    cast: ICast[];
    crew: ICrew[];
  };
  genres: IGenres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompanies[];
  production_countries: IProductionCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  similar: ISimilar;
  spoken_languages: ILanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  videos: {
    results: IVideo[];
  };
  vote_average: number;
  vote_count: number;
}

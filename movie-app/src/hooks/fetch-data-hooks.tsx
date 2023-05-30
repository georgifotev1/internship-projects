import { API_URL, API_KEY } from "../constants";
import axios from "axios";

export const useGetMovies = async (movieTypeURL: string[]) => {
  const categories = [];
  for (const url of movieTypeURL) {
    try {
      const res = await axios.get(`${API_URL}${url}${API_KEY}`);
      categories.push(res.data.results);
    } catch (error: any) {
      return error.message;
    }
  }
  return categories;
};

export const useGetMovieById = async (id: string) => {
  try {
    const res = await axios.get(
      `${API_URL}/movie/${id}?&append_to_response=videos,similar,credits&${API_KEY}`
    );
    return res.data;
  } catch (error: any) {
    return error.message;
  }
};

export const searchMovie = async (query: string) => {
  try {
    const res = await axios.get(
      `${API_URL}/search/movie?query=${query}&${API_KEY}`
    );
    return res.data.results;
  } catch (error: any) {
    return error.message;
  }
};

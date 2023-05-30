import axios from "axios";

export const interceptor = (token) =>
  axios.create({
    baseURL: "https://api.spotify.com/v1",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

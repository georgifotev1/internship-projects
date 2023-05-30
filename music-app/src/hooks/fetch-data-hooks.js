import { interceptor } from "../utils/interceptor";

export const UseGetPlaylists = async (token) => {
  return await interceptor(token).get("/me/playlists", {
    transformResponse: (response) => {
      const { items } = JSON.parse(response);
      return items.map(({ name, id }) => {
        return { name, id };
      });
    },
  });
};

export const UseGetSearchResults = async (token, search) => {
  return await interceptor(token).get(`/search`, {
    params: {
      q: search,
      type: "track",
      limit: 10,
    },
    transformResponse: (response) => {
      const {
        tracks: { items },
      } = JSON.parse(response);
      return items?.map((track) => {
        return {
          artist: track.artists[0].name,
          name: track.name,
          track_uri: track.uri,
          album: track.album.name,
          image: track.album.images[2].url,
        };
      });
    },
  });
};

export const UseGetInitialPlaylist = async (token, selectedPlaylistId) => {
  return await interceptor(token).get(`/playlists/${selectedPlaylistId}`, {
    transformResponse: (response) => {
      const data = JSON.parse(response);
      return {
        id: data.id,
        name: data.name,
        description: data.description.includes("<a")
          ? data.name
          : data.description,
        image: data.images[0].url,
        tracks: data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artist: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          album: track.album.name,
          track_uri: track.album.uri,
        })),
      };
    },
  });
};

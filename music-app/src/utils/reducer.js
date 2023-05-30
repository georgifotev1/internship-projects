import { reducerCases } from "./constants";

export const initialState = {
  token: null,
  playlists: [],
  selectedPlaylist: null,
  selectedPlaylistId: "0wDLDJNZF6ke7Pbet138ZI",
  trackUri: "",
  searchResults: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case reducerCases.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    case reducerCases.SET_PLAYLIST:
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };
    case reducerCases.SET_PLAYLIST_ID:
      return {
        ...state,
        selectedPlaylistId: action.selectedPlaylistId,
      };
    case reducerCases.SET_PLAYING_TRACK:
      return {
        ...state,
        trackUri: action.trackUri,
      };
    case reducerCases.SET_SEARCH_RESULT:
      return {
        ...state,
        searchResults: action.searchResults,
      };
    default:
      return state;
  }
};

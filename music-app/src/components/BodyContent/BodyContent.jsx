import { useStateProvider } from "../../utils/StateProvider";
import { useEffect } from "react";
import { reducerCases } from "../../utils/constants";
import "./body-content.css";
import { Playlist } from "./Playlist";
import { SearchResult } from "./SearchResult";
import { UseGetInitialPlaylist } from "../../hooks/fetch-data-hooks";

export const BodyContent = () => {
  const [{ token, selectedPlaylistId, searchResults }, dispatch] =
    useStateProvider();

  useEffect(() => {
    const getInitialPlaylist = async () => {
      const { data } = await UseGetInitialPlaylist(token, selectedPlaylistId);
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist: data });
    };
    getInitialPlaylist();
  }, [token, dispatch, selectedPlaylistId]);

  return <>{searchResults.length > 0 ? <SearchResult /> : <Playlist />}</>;
};

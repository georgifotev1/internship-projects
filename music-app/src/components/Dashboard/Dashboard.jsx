import { useEffect, useState } from "react";
import "./dashboard.css";
import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/constants";
import { Form } from "react-bootstrap";
import { BodyContent } from "../BodyContent/BodyContent";
import {
  UseGetPlaylists,
  UseGetSearchResults,
} from "../../hooks/fetch-data-hooks";

export const Dashboard = () => {
  const [{ token, playlists }, dispatch] = useStateProvider();
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await UseGetPlaylists(token);
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists: data });
    })();
  }, [dispatch, token]);

  useEffect(() => {
    if (!search) {
      dispatch({ type: reducerCases.SET_SEARCH_RESULT, searchResults: [] });
      return;
    }
    (async () => {
      const { data } = await UseGetSearchResults(token, search);
      dispatch({ type: reducerCases.SET_SEARCH_RESULT, searchResults: data });
    })();
  }, [search, token, dispatch]);

  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
  };

  return (
    <div className="app-body">
      <section className="sidebar">
        <Form.Control
          type="search"
          placeholder="Search Songs/Artists"
          value={search}
          onChange={({ target: { value } }) => setSearch(value)}
        />
        <ul>
          {playlists.map(({ name, id }) => (
            <li
              className="playlist-item"
              key={id}
              onClick={() => {
                changeCurrentPlaylist(id);
                setSearch("");
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      </section>
      <section className="app-body-content">
        <BodyContent />
      </section>
    </div>
  );
};

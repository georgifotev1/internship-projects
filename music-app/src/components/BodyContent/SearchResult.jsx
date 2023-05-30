import { useStateProvider } from "../../utils/StateProvider";
import { TrackList } from "../TrackList/TrackList";

export const SearchResult = () => {
  const [{ searchResults }] = useStateProvider();
  return <TrackList tracks={searchResults} />;
};

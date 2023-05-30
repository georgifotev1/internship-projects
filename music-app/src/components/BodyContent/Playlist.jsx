import React from "react";
import { useStateProvider } from "../../utils/StateProvider";
import { TrackList } from "../TrackList/TrackList";

export const Playlist = () => {
  const [{ selectedPlaylist }] = useStateProvider();
  return (
    <>
      {selectedPlaylist && (
        <TrackList
          name={selectedPlaylist.name}
          image={selectedPlaylist.image}
          description={selectedPlaylist.description}
          tracks={selectedPlaylist.tracks}
        />
      )}
    </>
  );
};

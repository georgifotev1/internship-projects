import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useStateProvider } from "../../utils/StateProvider";

export function Player() {
  const [play, setPlay] = useState(false);
  const [{ token, trackUri }] = useStateProvider();
  useEffect(() => setPlay(true), [trackUri]);

  if (!token) return null;
  return (
    <SpotifyPlayer
      token={token}
      showSaveIcon
      callback={(state) => {
        if (!state.isPlaying) setPlay(false);
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
  );
}

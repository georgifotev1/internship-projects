import { render, screen } from "@testing-library/react";
import { StateProvider } from "../../utils/StateProvider";
import { Playlist } from "./Playlist";

describe("Playlist component", () => {
  test("renders playlist name and tracks", () => {
    const playlist = {
      id: "1",
      name: "My Playlist",
      description: "A playlist",
      image: "https://example.com/playlist.jpg",
      tracks: [
        {
          id: "1",
          name: "Track 1",
          artists: "Artist 1",
          image: "https://example.com/track1.jpg",
          album: "Album 1",
          track_uri: "spotify:track:1",
        },
        {
          id: "2",
          name: "Track 2",
          artists: "Artist 2",
          image: "https://example.com/track2.jpg",
          album: "Album 2",
          track_uri: "spotify:track:2",
        },
      ],
    };
    const initialState = { selectedPlaylist: playlist };
    const dispatch = jest.fn();
    render(
      <StateProvider initialState={initialState} reducer={dispatch}>
        <Playlist />
      </StateProvider>
    );

    expect(screen.getByText(playlist.name)).toBeInTheDocument();
    expect(screen.getByText(playlist.description)).toBeInTheDocument();
    playlist.tracks.forEach((track) => {
      expect(screen.getByText(track.name)).toBeInTheDocument();
      expect(screen.getByText(track.artists)).toBeInTheDocument();
      expect(screen.getByText(track.album)).toBeInTheDocument();
    });
  });
});

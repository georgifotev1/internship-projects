import { render, screen } from "@testing-library/react";
import { Dashboard } from "./Dashboard";
jest.mock("./utils/StateProvider", () => ({
  useStateProvider: () => {
    return [
      {
        token: "",
        playlists: [],
        searchResults: [],
        selectedPlaylist: {
          id: "0wDLDJNZF6ke7Pbet138ZI",
          name: "retro cars",
          description: "",
          image:
            "https://mosaic.scdn.co/640/ab67616d0000b273015c484a7aca592df1a77828ab67616d0000b273c925139455d0480681315f02ab67616d0000b273ec7e2c5c7ecd29301f1c4b93ab67616d0000b273f793a842c1642b09a768a63b",
          tracks: [
            {
              id: "0lwUIYJfWGB8qUEAJtYfb6",
              name: "Broken Bones",
              artists: ["KALEO"],
              image:
                "https://i.scdn.co/image/ab67616d00004851f793a842c1642b09a768a63b",
              album: "A/B",
              track_uri: "spotify:album:4he4SQup02hEIQdwhZlZlk",
            },
          ],
        },
      },
      jest.fn,
    ];
  },
}));

describe("Dashboard component", () => {
  test("checks if playlist is loaded correctly", () => {
    render(<Dashboard />);

    expect(screen.getByText("retro cars")).toBeInTheDocument();
  });
});

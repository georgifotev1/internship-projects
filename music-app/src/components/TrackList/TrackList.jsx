import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/constants";

export const TrackList = ({ image, name, description, tracks }) => {
  const [, dispatch] = useStateProvider();
  return (
    <>
      {name ? (
        <div className="playlist">
          <div className="image">
            <img src={image} alt="selected playlist" />
          </div>
          <div className="details">
            <h1 className="title">{name}</h1>
            <p className="description">{description}</p>
          </div>
        </div>
      ) : (
        <div className="playlist">
          <div className="details">
            <h1 className="title">Search results:</h1>
          </div>
        </div>
      )}
      <div className="list">
        <div className="header-row">
          <div className="col">
            <span>#</span>
          </div>
          <div className="col">
            <span>TITLE</span>
          </div>
          <div className="col">
            <span>ALBUM</span>
          </div>
        </div>
      </div>
      <div className="tracks">
        {tracks.map(({ name, artist, image, album, track_uri }, index) => {
          return (
            <div
              className="row"
              key={`${track_uri}-${index}`}
              onClick={() => {
                dispatch({
                  type: reducerCases.SET_PLAYING_TRACK,
                  trackUri: track_uri,
                });
              }}
            >
              <div className="col">
                <span>{index + 1}</span>
              </div>
              <div className="col detail">
                <div className="image">
                  <img src={image} alt="track" />
                </div>
                <div className="info">
                  <span className="name">{name}</span>
                  <span>{artist}</span>
                </div>
              </div>
              <div className="col">
                <span>{album}</span>
              </div>
              <div className="col"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

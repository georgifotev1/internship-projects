import { Container } from "react-bootstrap";
import "./login.css";
import { clientId, redirectUri, scope } from "../../utils/constants";

export const Login = () => {
  const url = "https://accounts.spotify.com/authorize";
  const AUTH_URL = `${url}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scope}`;

  return (
    <Container className="login d-flex justify-content-center align-items-center flex-column">
      <h1>Music App</h1>
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  );
};

import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./components/Login/Login";
import { useEffect } from "react";
import { useStateProvider } from "./utils/StateProvider";
import { reducerCases } from "./utils/constants";
import { Layout } from "./components/Layout/Layout";
import { useLocation } from "react-router-dom";

function App() {
  const [{ token }, dispatch] = useStateProvider();
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
  }, [dispatch, token, hash]);
  return <div className="App">{token ? <Layout /> : <Login />}</div>;
}

export default App;

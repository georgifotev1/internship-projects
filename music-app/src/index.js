import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initialState, reducer } from "./utils/reducer";
import { StateProvider } from "./utils/StateProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>
);

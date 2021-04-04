import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MapContextProvider } from "./contexts/MapContexts";

ReactDOM.render(
  <MapContextProvider>
    <App />
  </MapContextProvider>,
  document.getElementById("root")
);

reportWebVitals();

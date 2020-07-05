import React from "react";
import ReactDOM from "react-dom";
import { InfoProvider } from "./context";

import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <InfoProvider>
      <Router>
        <App />
      </Router>
    </InfoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

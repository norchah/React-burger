import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App.jsx";
import { Provider } from "react-redux";
import { store } from "./services/slices/index.js";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

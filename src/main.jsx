import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./Store/Store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  </StrictMode>
);

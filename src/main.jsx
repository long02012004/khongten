import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/* import { Provider } from "react-redux";
import store from "./redux/store"; */
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "nprogress/nprogress.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

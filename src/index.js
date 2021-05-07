import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import App from "./containers/App/App.js";
import { hydrate } from 'react-dom';
import configureStore from "./redux/store.js";
import "./index.scss";

const store = configureStore(window.PRELOADED_STATE);

const app = (
  <App
    Router={Router}
    store={store}
  />
);

const rootElement = document.getElementById("root");

hydrate(app, rootElement);

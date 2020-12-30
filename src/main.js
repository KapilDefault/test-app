import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import App from "./App";

const { store } = configureStore();

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
export default Main;

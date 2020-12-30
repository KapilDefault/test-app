import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import rootReducer from "./rootReducer";

const axiosClient = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com",
  responseType: "json",
});

// Store instance
let store = null;

const options = {
  // not required, but use-full configuration option
  returnRejectedPromiseOnError: true,
  interceptors: {
    request: [
      ({ getState, dispatch }, config) => {
        return config;
      },
    ],
    response: [
      {
        // success: function ({getState, dispatch, getSourceAction}, response) {
        success: ({ dispatch }, response) => {
          // Response interception
          return response;
        },
        // error: function ({getState, dispatch, getSourceAction}, error) {
        error: ({ dispatch }, error) => {
          // Response Error Interception

          return Promise.reject(error);
        },
      },
    ],
  },
};
/**
 * Create the Redux store
 */
export const configureStore = () => {
  store = createStore(
    rootReducer,
    applyMiddleware(reduxThunk, axiosMiddleware(axiosClient, options))
  );
  const dispatch = (...args) => store.dispatch(...args);
  return { store, dispatch };
};

/**
 * Get store
 */
export const getStore = () => store;

/**
 * Dispatch an action
 */
export const dispatch = (...args) => store.dispatch(...args);

const storeObject = {
  dispatch,
  getStore,
  configureStore,
};

export default storeObject;

import { combineReducers } from "redux";
import dataReducer from '../reducers/data'

// combineReducers function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
const appReducers = combineReducers({ dataReducer });

function rootReducer(state, action) {
  let newState = state;
  if (action.type === "CLEAR_STORAGE") {
    newState = undefined;
  }
  return appReducers(newState, action);
}

export default rootReducer;

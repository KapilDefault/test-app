import {
  GET_DATA_SUCCESS,
  SET_CURRENT_PAGE,
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
} from "../constants";
import { getParameterByName } from "../../utils";
const initialState = {
  data: [],
  page: 0,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS: {
      const { data, config } = action.payload;
      const url = `${config.baseURL}${config.url}`;
      const start = getParameterByName("_start", url);
      const limit = getParameterByName("_limit", url);
      const tmpArray = [...state.data];
      tmpArray.splice(start, limit, ...data);
      return { ...state, data: tmpArray };
    }
    case ADD_ITEM: {
      const data = action.payload;
      return {
        ...state,
        data: [data, ...state.data],
      };
    }
    case DELETE_ITEM: {
      const id = action.payload;
      const updatedData = state.data.slice();
      const index = updatedData.findIndex((item) => item.id === id);
      if (index !== -1) {
        updatedData.splice(index, 1);
      }

      return {
        ...state,
        data: updatedData,
      };
    }
    case UPDATE_ITEM: {
      const album = action.payload;
      const updatedData = state.data.slice();
      const index = updatedData.findIndex((item) => item.id === album.id);
      if (index !== -1) {
        updatedData[index] = album;
      }
      return {
        ...state,
        data: updatedData,
      };
    }
    case SET_CURRENT_PAGE:
      const { type } = action.payload;
      return {
        ...state,
        page:
          type === "prev"
            ? state.page - 1
            : type === "next"
            ? state.page + 1
            : state.page,
      };
    default:
      return state;
  }
};

export default dataReducer;

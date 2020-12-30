import { GET_DATA, SET_CURRENT_PAGE, DELETE_ITEM, ADD_ITEM, UPDATE_ITEM } from "../constants";
export const getData = ({ start = 0, limit = 5 }) => ({
  type: GET_DATA,
  payload: {
    request: {
      url: encodeURI(`/photos?_start=${start}&_limit=${limit}`),
      method: "GET",
    },
    queryData: { start, limit }
  },
});

export const setCurrentPage = ({ type }) => ({
  type: SET_CURRENT_PAGE,
  payload: {
    type
  },
});


export const deleteItem = (id) => ({ type: DELETE_ITEM, payload: id });

/**
 * 
 * @param {*} data : { albumId, title }
 */
export const addItem = (data) => ({ type: ADD_ITEM, payload: data });

/**
 * 
 * @param {object} data : { id, album}
 */
export const updateItem = (data) => ({ type: UPDATE_ITEM, payload: data });

import { GET_MENU, DELETE_MENU, ADD_MENU, EDIT_MENU } from "./type";
import axios from "axios";
export const getMenu = (payload) => {
  return {
    type: GET_MENU,
    payload,
  };
};
export const getMenuFromApi = () => {
  return (dispatch) =>
    axios
      .get("http://localhost:3002/menu")
      .then((res) => dispatch(getMenu(res.data)));
};
export const removeMenu = (payload) => {
  return {
    type: DELETE_MENU,
    payload,
  };
};
export const delMenuFromApi = (id) => {
  return (dispatch) =>
    axios
      .delete(`http://localhost:3002/menu/${id}`)
      .then((res) =>
        dispatch(removeMenu(res.data), window.location.reload(false))
      );
};
export const addMenu = (payload) => {
  return {
    type: ADD_MENU,
    payload,
  };
};
export const addMenuToApi = (el) => {
  return (dispatch) =>
    axios
      .post("http://localhost:3002/menu", el)
      .then((res) =>
        dispatch(addMenu(res.data), window.location.reload(false))
      );
};
export const editMenu = (payload) => {
  return {
    type: EDIT_MENU,
    payload,
  };
};
export const editMenuInApi = (el) => {
  return (dispatch) => {
    console.log(el);

    axios
      .patch(`http://localhost:3002/menu/${el.id}`, el)
      .then((res) =>
        dispatch(editMenu(res.data), window.location.reload(false))
      );
  };
};

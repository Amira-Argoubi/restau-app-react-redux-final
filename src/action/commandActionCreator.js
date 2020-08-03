import { GET_COMMAND, DELETE_COMMAND, ADD_COMMAND, EDIT_QUANT } from "./type";
import axios from "axios";
export const getToClient = (payload) => {
  return {
    type: GET_COMMAND,
    payload,
  };
};
export const getFromApi = () => {
  return (dispatch) =>
    axios
      .get("http://localhost:3002/commands")
      .then((res) => dispatch(getToClient(res.data)));
};
export const removeCommand = (payload) => {
  return {
    type: DELETE_COMMAND,
    payload,
  };
};
export const delCommandFromApi = (id) => {
  return (dispatch) =>
    axios
      .delete(`http://localhost:3002/commands/${id}`)
      .then((res) =>
        dispatch(removeCommand(res.data), window.location.reload(false))
      );
};
export const addCommand = (payload) => {
  return {
    type: ADD_COMMAND,
    payload,
  };
};
export const addCommandToApi = (el) => {
  return (dispatch) =>
    axios
      .post("http://localhost:3002/commands", el)
      .then((res) =>
        dispatch(addCommand(res.data), window.location.reload(false))
      );
};
export const editQ = (payload) => ({
  type: EDIT_QUANT,
  payload,
});

export function editQuantity(id, Q) {
  return (dispatch) =>
    axios
      .patch("http://localhost:3002/commands/" + id, Q)
      .then((res) => dispatch(editQ(res.data), window.location.reload(false)));
}

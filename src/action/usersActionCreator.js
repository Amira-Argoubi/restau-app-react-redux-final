import { GET_USER, ADD_USER } from "./type";

import axios from "axios";

// GET REQUEST , get list of users
export const getUser = (payload) => ({
  type: GET_USER,
  payload,
});

export function getUserFromApi() {
  return (dispatch) =>
    axios
      .get("http://localhost:3002/users")
      .then((res) => dispatch(getUser(res.data)));
}
// ADD REQUEST , add user
export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export function addUserToApi(el) {
  return (dispatch) =>
    axios
      .post("http://localhost:3002/users", el)
      .then((res) =>
        dispatch(addUser(res.data), window.location.reload(false))
      );
}

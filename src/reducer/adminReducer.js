import { GET_MENU, DELETE_MENU, ADD_MENU, EDIT_MENU } from "../action/type";
const stateInit = [];
const adminReducer = (state = stateInit, action) => {
  if (action.type === GET_MENU) {
    return action.payload;
  } else if (action.type === DELETE_MENU) {
    return state.filter((el) => el.id !== action.payload);
  } else if (action.type === ADD_MENU) {
    return [...state, action.payload];
  } else if (action.type === EDIT_MENU) {
    return [...state, action.payload];
  } else {
    return state;
  }
};
export default adminReducer;

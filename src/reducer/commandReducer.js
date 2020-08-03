import { GET_COMMAND, ADD_COMMAND, DELETE_COMMAND } from "../action/type";
const stateInit = [];
const commandReducer = (state = stateInit, action) => {
  if (action.type === GET_COMMAND) {
    return action.payload;
  } else if (action.type === ADD_COMMAND) {
    return [...state, action.payload];
  } else if (action.type === DELETE_COMMAND) {
    return state.filter((el) => el.id !== action.payload);
  } else {
    return state;
  }
};
export default commandReducer;

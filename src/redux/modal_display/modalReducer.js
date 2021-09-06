import { TOGGLE_MODAL } from "./modalTypes";

export const modalReducer = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return !state;
    default:
      return state;
  }
};

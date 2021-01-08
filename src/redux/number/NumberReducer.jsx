import { NUMBER_MINUS } from "./NumberType";

const initialState = {
  number: 20,
};
const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case NUMBER_MINUS:
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
};
export default numberReducer;

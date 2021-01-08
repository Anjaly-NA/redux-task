import { COUNT_MINUS } from "./CountType";

const initialState = {
  count: 10,
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_MINUS:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};
export default countReducer;

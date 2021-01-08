import { COUNT_MINUS } from "./CountType";

export const countMinus = (inputValue = 1) => {
  return {
    type: COUNT_MINUS,
    payload: inputValue,
  };
};

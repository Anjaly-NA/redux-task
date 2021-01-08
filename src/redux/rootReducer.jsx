import { combineReducers } from "redux";
import countReducer from "./count/countReducer";
import numberReducer from "./number/NumberReducer";
import UserReducer from "./user/UserReducer";

const rootReducer = combineReducers({
  countRed: countReducer,
  numberRed: numberReducer,
  userRed: UserReducer,
});
export default rootReducer;

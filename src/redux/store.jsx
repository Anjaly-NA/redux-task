import { createStore, applyMiddleware } from "redux";
// import countReducer from "./count/countReducer";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

// const store = createStore(countReducer);
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;

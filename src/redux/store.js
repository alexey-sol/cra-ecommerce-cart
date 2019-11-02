import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const middlewares = [logger];
const appliedMiddlewares = applyMiddleware(...middlewares);

const store = createStore(rootReducer, appliedMiddlewares);

export default store;

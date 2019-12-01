import {applyMiddleware, createStore} from "redux";
import {persistStore} from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const isDevelopment = process.env.NODE_ENV === "development";
const middlewares = [];
const appliedMiddlewares = applyMiddleware(...middlewares);

if (isDevelopment) {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, appliedMiddlewares);
export const persistor = persistStore(store);

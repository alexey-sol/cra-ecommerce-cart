import {applyMiddleware, createStore} from "redux";
import {persistStore} from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const middlewares = [logger];
const appliedMiddlewares = applyMiddleware(...middlewares);

export const store = createStore(rootReducer, appliedMiddlewares);
export const persistor = persistStore(store);

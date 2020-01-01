import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import authReducer from "./auth/auth.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import paymentReducer from "./payment/payment.reducer";
import shopReducer from "./shop/shop.reducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  directory: directoryReducer,
  payment: paymentReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);

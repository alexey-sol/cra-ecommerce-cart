import {combineReducers} from "redux";
import authReducer from "./auth/auth.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  auth: authReducer,
  cart: cartReducer
});

import { combineReducers } from "@reduxjs/toolkit";

import { productReducer } from "./product/product.reducer";
import { userReducer } from "./user/user.reducer";
// we can add categories , if we add search to app
export const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
});

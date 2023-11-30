import { combineReducers } from "@reduxjs/toolkit";

import { productReducer } from "./product/product.reducer";

// we can add categories , if we add search to app
export const rootReducer = combineReducers({
  product: productReducer,
});

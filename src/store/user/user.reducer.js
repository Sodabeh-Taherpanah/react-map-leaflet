import { createSlice } from "@reduxjs/toolkit";

export const USER_INITIAL_STATE = {
  userProduct: {
    title: "",
    price: 0,
    image: "",
  },
  userInfo: {
    name: "",
    email: "",
    adress: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState: USER_INITIAL_STATE,
  reducers: {
    setUser(state, action) {
      state.userInfo = action.payload;
    },
    setAddress(state, action) {
      state.userInfo = {
        ...state.userInfo,
        address: action.payload,
      };
    },
    updateProduct(state, action) {
      //for test just I have one product in my cart
      state.userProduct = action.payload;
    },
  },
});

export const { setUser, updateProduct, setAddress } = userSlice.actions;

export const userReducer = userSlice.reducer;

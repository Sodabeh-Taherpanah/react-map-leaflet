import { createSlice } from "@reduxjs/toolkit";

export const PRODUCT_INITIAL_STATE = {
  listProduct: [],
  filteredProduct: [],
  filterObj: {
    Name: "",
    Type: "All",
  },
};
const filterProductItems = (listProduct, filterObj) => {
  const existingItems = listProduct.filter((item) => {
    let hasValues = item.title
      .toLocaleLowerCase()
      .includes(filterObj.Name.toLocaleLowerCase());
    if (filterObj.Type !== "All")
      hasValues = hasValues && item.category.Name === filterObj.Type;
    return hasValues;
  });
  return existingItems;
};
export const productSlice = createSlice({
  name: "product",
  initialState: PRODUCT_INITIAL_STATE,
  reducers: {
    setProduct(state, action) {
      state.listProduct = action.payload;
      state.filteredProduct = action.payload;
    },
    filterProduct(state, action) {
      state.filterObj = action.payload;
      state.filteredProduct = filterProductItems(
        state.listProduct,
        action.payload
      );
    },
  },
});

export const { setProduct, filterProduct, resetFilter } = productSlice.actions;

export const productReducer = productSlice.reducer;

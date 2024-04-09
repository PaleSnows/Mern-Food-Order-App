import { createSlice } from "@reduxjs/toolkit";
import food from "../../assets/food";

const initialState = {
  filteredProducts: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProduct: (state, action) => {
      try {
        const filter = food.filter(
          (product) => product.category === action.payload
        );
        state.filteredProducts = filter;
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("saveState");
      } catch (error) {
        return error;
      }
    },
  },
});

export const { filterProduct } = productSlice.actions;

export default productSlice.reducer;

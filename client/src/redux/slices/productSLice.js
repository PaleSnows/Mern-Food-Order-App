import { createSlice } from "@reduxjs/toolkit";
import food from "../../assets/food";

const initialState = {
  filteredProducts: "",
  singleProduct: "",
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
        console.log(filter);
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("saveState", saveState);
      } catch (error) {
        return error;
      }
    },
    singleProduct: (state, action) => {
      try {
        const oneProduct = food.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
});

export const { filterProduct } = productSlice.actions;

export default productSlice.reducer;

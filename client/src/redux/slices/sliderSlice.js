import { createSlice } from "@reduxjs/toolkit";
import food from "../../assets/food";


const initialState = {
  value: 1 ,
  length: food.length,
};

const sliderSlice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    nextSlide: (state, action) => {
      state.value = action.payload > state.length - 1 ? 1 : action.payload;
    },
    prevSlide: (state, action) => {
      state.value = action.payload < 1 ? state.length - 1 : action.payload;
    },
  },
});

export const {nextSlide,prevSlide} = sliderSlice.actions

export default sliderSlice.reducer

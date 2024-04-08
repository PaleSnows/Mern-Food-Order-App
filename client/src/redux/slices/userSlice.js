import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUSer: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinStart: (state, action) => {
      state.loading = true;
    },
    signinSucess: (state, action) => {
      state.loading = false;
      state.currentUSer = action.payload;
      state.error = null;
    },
    signinFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signinStart,signinSucess,signinFailure } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCropsListLoading: false,
  cropsList: [],
};
const cropsSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    getCropsListStart: (state) => {
      state.isCropsListLoading = true;
    },
    getCropsListSuccess: (state, { payload }) => {
      state.cropsList = payload;
      state.isCropsListLoading = false;
    },
    getCropsListFailed: (state) => {
      state.isCropsListLoading = false;
      state.cropsList = [];
    },
  },
});

export const { getCropsListStart, getCropsListSuccess, getCropsListFailed } =
  cropsSlice.actions;

export default cropsSlice.reducer;

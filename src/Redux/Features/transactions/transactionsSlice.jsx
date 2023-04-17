import { createSlice } from "@reduxjs/toolkit";
import { fetchTransactions } from "./transactionsApi";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMsg: "",
};

const transactionsSlice = createSlice({
  name: "transactionsData",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.data = action.payload;

        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchTransactions.pending, (state, actions) => {
        state.errorMsg = "";
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isError = true;
        state.errorMsg = action.payload;
      });
  },
});

export default transactionsSlice;

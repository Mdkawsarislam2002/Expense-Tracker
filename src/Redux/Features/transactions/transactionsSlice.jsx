import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  editTransaction,
} from "./transactionsApi";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMsg: "",
  dltMsg: "",
};

const transactionsSlice = createSlice({
  name: "transactionsData",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.data = action.payload;

        state.isLoading = false;
        state.isError = false;
        state.errorMsg = "";
      })
      .addCase(fetchTransactions.pending, (state) => {
        state.errorMsg = "";
        state.isLoading = true;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isError = true;
        state.errorMsg = action.payload;
        state.data = [];
      });

    builder.addCase(deleteTransaction.fulfilled, (state) => {
      state.dltMsg = "deleted successfully";
    });
  },
});

export default transactionsSlice;

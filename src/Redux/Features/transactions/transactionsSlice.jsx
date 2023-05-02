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

    builder
      .addCase(deleteTransaction.fulfilled, (state, actions) => {
        state.dltMsg = `Transaction with id ${actions.payload} deleted successfully`;
      })
      .addCase(deleteTransaction.pending, (state) => {
        state.dltMsg = "";
      });

    //  add Transaction
    builder
      .addCase(addTransaction.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(addTransaction.fulfilled, (state, actions) => {
        state.data.push(actions.payload);
        state.isLoading = true;
      });
    //  edit Transaction
    builder
      .addCase(editTransaction.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(editTransaction.fulfilled, (state, actions) => {
        let findIndex = state.data.findIndex((items) => {
          return items.id === actions.payload.id;
        });
        state.data[findIndex] = actions.payload;
        state.isLoading = true;
      });
  },
});

export default transactionsSlice;

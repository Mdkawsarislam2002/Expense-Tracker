import { configureStore } from "@reduxjs/toolkit";
import transactionsSlice from "./Features/transactions/transactionsSlice";

const store = configureStore({
  reducer: {
    transactionsData: transactionsSlice.reducer,
  },
});

export default store;

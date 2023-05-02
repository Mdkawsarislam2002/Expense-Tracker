import { configureStore } from "@reduxjs/toolkit";
import transactionsSlice from "./Features/transactions/transactionsSlice";
import formHandlingSlice from "./Features/FormHandaling/FormHandling";

const store = configureStore({
  reducer: {
    transactionsData: transactionsSlice.reducer,
    formHandling: formHandlingSlice.reducer,
  },
});

export default store;

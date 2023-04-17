import { createAsyncThunk } from "@reduxjs/toolkit";
import TheAxios from "../../../utils/TheAxios";
TheAxios;

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async () => {
    const response = await TheAxios.get("/transactions");
    return response.data;
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import TheAxios from "../../../utils/TheAxios";

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async () => {
    const response = await TheAxios.get("/transactions");
    return response.data;
  }
);

export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async ({ data }) => {
    const response = await TheAxios.post("/transactions", data);
    return response.data;
  }
);
export const editTransaction = createAsyncThunk(
  "transactions/editTransaction",
  async ({ id, data }) => {
    const response = await TheAxios.put(`/transactions/${id}`, data);
    return response.data;
  }
);
export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async ({ id }) => {
    const response = TheAxios.delete(`/transactions/${id}`);
    return response.data;
  }
);

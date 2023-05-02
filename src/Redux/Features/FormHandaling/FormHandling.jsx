import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditing: false,
  updatedValue: {},
};

const formHandlingSlice = createSlice({
  name: "formHandling",
  initialState,
  reducers: {
    setEditState: (state, action) => {
      state.updatedValue = action.payload;
    },
    manageEditing: (state) => {
      state.isEditing = !state.isEditing;
    },
  },
});

export const { setEditState, manageEditing } = formHandlingSlice.actions;
export default formHandlingSlice;

import { createSlice } from "@reduxjs/toolkit";

export const selectionSlice = createSlice({
  name: "selection",
  initialState: {
    value: 1,
  },
  reducers: {
    updateSection: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateSection } = selectionSlice.actions;
export default selectionSlice.reducer;

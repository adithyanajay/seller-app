import { createSlice } from "@reduxjs/toolkit";

export const propertySlice = createSlice({
  name: "properties",
  initialState: {
    data: [],
  },
  reducers: {
    fetchProperties: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { fetchProperties } = propertySlice.actions;
export default propertySlice.reducer;

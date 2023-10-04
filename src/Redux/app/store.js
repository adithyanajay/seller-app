import { configureStore } from "@reduxjs/toolkit";
import propertiesReducer from "../features/properties/propertySlice.js";
import selectionReducer from "../features/selection/selecitonSlice.js";
export const store = configureStore({
  reducer: {
    properties: propertiesReducer,
    selection: selectionReducer,
  },
});

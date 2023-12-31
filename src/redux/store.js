import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./reducer/noteReducer";
const store = configureStore({
  reducer: {
    noteState: noteReducer,
  },
});

export default store;

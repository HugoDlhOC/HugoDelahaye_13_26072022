import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";

//création du store
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";

const rootReducer = {
  user: userReducer
}


const store = configureStore(
  {
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  }
)

export default store;
import { configureStore } from "@reduxjs/toolkit";
import ecomReducer from "../ecomSlice/ecomSlice";


const store=configureStore({
  reducer: {
    ecommerce:ecomReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

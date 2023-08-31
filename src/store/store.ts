import { configureStore } from "@reduxjs/toolkit";
import ecomSliceReducer from "../ecomSlice/ecomSlice";
const store = configureStore({
  reducer: {    
    ecommerce: ecomSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

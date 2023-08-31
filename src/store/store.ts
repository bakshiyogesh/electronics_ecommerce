import {configureStore} from '@reduxjs/toolkit';
import ecomSlice  from '../ecomSlice/ecomSlice';
const store=configureStore({
    reducer:{
        ecommerce:ecomSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
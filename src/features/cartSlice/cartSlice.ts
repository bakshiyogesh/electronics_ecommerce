import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { productData } from "../../interfaces/interface";

interface cartData extends productData {
  count: number;
}

const initialState: cartData = {
  imgSRC: "",
  name: "",
  price: 0,
  category: "",
  count:0
};

export const cartSlice = createSlice({
  name: "vegetableCart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartData>) => {
      if (action.payload.count==1){
          state.count++;
      }
      else{
        state=action.payload;
      }
    },
  },
});

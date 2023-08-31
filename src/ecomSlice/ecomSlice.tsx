import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { productData } from "../interfaces/interface";

interface itemData {
  cardData: productData[],
}
const initialState:itemData={
    cardData:[],
}
export const ecomSlice = createSlice({
  name: "ecomSlice",
  initialState,
  reducers: {
         addToCart:(state,action:PayloadAction<productData>)=>{
            const itemInCart = state.cardData.find((item) => item.id === action.payload.id);
            if(itemInCart){
                itemInCart.count++;
            }
            else{
                state.cardData.push({...action.payload,count:1})
            }
         },
         removeFromCart:(state,action:PayloadAction<productData>)=>{
            const itemInCart = state.cardData.filter((item) => item.id !== action.payload.id);
            state.cardData=itemInCart;
         },
         incremenQuantity:(state,action:PayloadAction<productData>)=>{
            const itemInCart = state.cardData.find((item) => item.id === action.payload.id);
            itemInCart!.count++;
         },
         decremenQuantity:(state,action:PayloadAction<productData>)=>{
            const itemInCart = state.cardData.find((item) => item.id === action.payload.id);
            if(itemInCart?.count!=1){
             itemInCart!.count=1;
            }
            else{
                itemInCart.count--;
            }
         }

  },
});
export const {addToCart,removeFromCart,incremenQuantity,decremenQuantity}=ecomSlice.actions;

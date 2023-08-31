import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../interfaces/interface";

interface itemData{
    cardData:productData[],
    count:number
}

export const ecomSlice=createSlice({
    name:'ecomSlice',
    initialState,   
    reducers:{

    }
})
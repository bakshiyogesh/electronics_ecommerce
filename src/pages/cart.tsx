import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
const Cart:FC=()=>{
const selector=useSelector((state:RootState)=>state.ecommerce.cardData);
console.log(selector);
console.log('data');
return(<>
</>)
}
export default Cart;
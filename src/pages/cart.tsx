import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
const Cart:FC=()=>{
const selector=useSelector((state:RootState)=>state.ecommerce);
console.log(selector);
return(<>
</>)
}
export default Cart;
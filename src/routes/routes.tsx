import { BrowserRouter, Route,Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import Offer from "../pages/Offers";
import SignUp from "../pages/SignUP";
import Cart from "../pages/cart";

function Routing() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/offers" element={<Offer/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
  export default Routing;
import { FC } from "react";
import NavBar from "../components/common/navbar/Navbar";
import ProductCard from "../components/common/card/Card";
import ImageSlider from "../components/imageSlider/ImageSlider";
import ProductContainer from "../components/imagecontainer/ImageContainer";
import Footer from "../components/common/footer/Footer";



const HomePage:FC=()=>{

 return(
<>
  <NavBar/>
  <ProductContainer/>
  <ImageSlider/>
  <ProductCard />
  <Footer/>
</>
 )
}
export default HomePage;
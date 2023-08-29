import { productData } from "../../../interfaces/interface";
import ProductCard from "../card/Card";
import { productsData } from "../../constants/constant";
const categoryFilter = (element: string) => {
  if (element === "Vegetables") {
    const vegiesData:productData[]= productsData.filter(
      (cardData: { category: string; }) => cardData.category === "vegetable"
    );
    // console.log("vegies");
    // console.log(vegiesData);
    <ProductCard props={vegiesData}/>;
  } else {
    const fruitsData:productData[] = productsData.filter(
      (cardData: { category: string; }) => cardData.category === "fruit"
    );
    // console.log(vegiesData);
    <ProductCard props={fruitsData}/>; 
  }
};
export default categoryFilter;

import { productData } from "../../../interfaces/interface";
import ProductCard from "../card/Card";
import { productsData } from "../../constants/constant";
const categoryFilter = (element: string) => {
  if (element === "Vegetables") {
    const vegiesData:productData[]= productsData.filter(
      (cardData: { category: string; }) => cardData.category === "vegetable"
    );
    // console.log("vegies");
    console.log(vegiesData);
    <ProductCard vegiesData={vegiesData} />;
  } else {
    const vegiesData:productData[] = productsData.filter(
      (cardData: { category: string; }) => cardData.category === "fruit"
    );
    console.log(vegiesData);
    <ProductCard vegiesData={vegiesData}/>; 
  }
};
export default categoryFilter;

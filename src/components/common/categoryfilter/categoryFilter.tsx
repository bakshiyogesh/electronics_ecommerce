import { productData } from "../../../interfaces/interface";
import ProductCard from "../card/Card";
import { productsData } from "../../constants/constant";

const categoryFilter = (element: string) => {
  if (element === "Vegetables") {
    const vegiesData:productData[]= productsData.filter(
      (cardData: { category: string; }) => cardData.category === "vegetable"
    );
    // console.log("vegies");
    <ProductCard productsData={vegiesData}/>;
    console.log("vegiesData",vegiesData);
    return vegiesData;

  } else {
    const fruitsData:productData[] = productsData.filter(
      (cardData: { category: string; }) => cardData.category === "fruit"
    );
    // console.log(vegiesData);
    <ProductCard productsData={fruitsData}/>;
    console.log("fruitsData",fruitsData);
    return fruitsData;
  }
};
export default categoryFilter;

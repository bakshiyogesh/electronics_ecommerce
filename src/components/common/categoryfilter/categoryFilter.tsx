import ProductCard, { cardsData } from "../card/Card";
const categoryFilter=(element:string)=>{
      if(element==='Vegetables'){
        // console.log('vegies')
         const vegiesData=cardsData.filter((cardData)=>cardData.category==="vegetable");
         console.log(vegiesData);
         <ProductCard categoryData={vegiesData}/>
      }
      else{
        const fruitsData=cardsData.filter((cardData)=>cardData.category==="fruit");
        console.log(fruitsData);
      }

}
export default categoryFilter;
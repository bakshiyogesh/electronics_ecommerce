import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Grid, Button} from "@mui/material";

    const cardsData=[
   {imgSRC:'/Apples.webp',name:'Apples',price:200},
   {imgSRC:'/BabySpinach.webp',name:'BabySpinach',price:100},
   {imgSRC:"/blueberries.webp",name:'BlueBerries',price:150},
   {imgSRC:"/BrusselsSprouts.webp",name:'Brussels',price:50},
   {imgSRC:"/CelerySticks.webp",name:'CelerySticks',price:80},
   {imgSRC:'/clementines.webp',name:'Clementines',price:110},
   {imgSRC:'/Corn.webp',name:'Corn',price:200},
   {imgSRC:'/Cucumber.webp',name:'Cucumber',price:300},
   {imgSRC:'/Dates.webp',name:'Dates',price:400},
   {imgSRC:'/lemon.webp',name:'Lemon',price:120},
   {imgSRC:'/Mangoes.webp',name:'Mango',price:100},
   {imgSRC:'/pears.webp',name:'Pears',price:90},
   {imgSRC:"/MiniPeppers.webp",name:'MiniPeppers',price:60},
   {imgSRC:"/strawberry.webp",name:'Strawberries',price:100},
   {imgSRC:'/RedCherries.webp',name:"RedCherries",price:150},
   {imgSRC:'/FrenchGreenBeans.webp',name:'FrenchGreenBeans',price:230}
     ];
export default function ProductCard() {
  return (

<Grid container sx={{ gap: 5, mt: 10 }} flexWrap={"wrap"} justifyContent={'center'} component={"section"}>
        {cardsData.map((item) => {
          return (
            <>
              <Card sx={{ width: "30vw", height: "auto" }}>
                <CardContent>
                  <CardMedia
                    sx={{ height: "200px" }}
                    image={item.imgSRC}
                    title="green iguana"
                  />
                  <Typography variant="subtitle2" color="text.secondary">
                    ₹{item.price}
                     </Typography>
                     <Typography variant="subtitle2">
                      {item.name}
                   </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Add to cart</Button>
                </CardActions>
              </Card>
              </>
        )}
          )}
</Grid>
  )
}

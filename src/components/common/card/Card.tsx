import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Grid, Button} from "@mui/material";
import SideMenuBar from "../../sideMenu/sideMenu";

    const cardsData=[
   {imgSRC:'/Apples.webp',name:'Apples',price:200,category:'fruit'},
   {imgSRC:'/BabySpinach.webp',name:'BabySpinach',price:100,category:'vegetable'},
   {imgSRC:"/blueberries.webp",name:'BlueBerries',price:150,category:'fruit'},
   {imgSRC:"/BrusselsSprouts.webp",name:'Brussels',price:50,category:'vegetable'},
   {imgSRC:"/CelerySticks.webp",name:'CelerySticks',price:80,category:'vegetable'},
   {imgSRC:'/clementines.webp',name:'Clementines',price:110,category:'vegetable'},
   {imgSRC:'/Corn.webp',name:'Corn',price:200,category:'vegetable'},
   {imgSRC:'/Cucumber.webp',name:'Cucumber',price:300,category:'vegetable'},
   {imgSRC:'/Dates.webp',name:'Dates',price:400,category:'fruit'},
   {imgSRC:'/lemon.webp',name:'Lemon',price:120,category:'lemon'},
   {imgSRC:'/Mangoes.webp',name:'Mango',price:100,category:'fruit'},
   {imgSRC:'/pears.webp',name:'Pears',price:90,category:'fruit'},
   {imgSRC:"/MiniPeppers.webp",name:'MiniPeppers',price:60,category:'vegetable'},
   {imgSRC:"/strawberry.webp",name:'Strawberries',price:100,category:'fruit'},
   {imgSRC:'/RedCherries.webp',name:"RedCherries",price:150,category:'vegetable'},
   {imgSRC:'/FrenchGreenBeans.webp',name:'FrenchGreenBeans',price:230,category:'vegetable'}
     ];
export default function ProductCard() {
  return (
<>
<Grid container component={'section'}>
  <SideMenuBar/>
<Grid container sx={{ gap: 5, mt: 10,width:'70%'}} flexWrap={"wrap"} justifyContent={'flex-end'} component={"section"}>
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
                  <Button size="small" variant="contained" color="success">Add to cart</Button>
                </CardActions>
              </Card>
              </>
        )}
          )}
</Grid>
</Grid>
</>
  )
}

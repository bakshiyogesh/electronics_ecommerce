import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button} from "@mui/material";
// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));
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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{display:'flex',flexWrap:'wrap',m:6,justifyContent:'right'}}>
      {
       cardsData.map((element)=>{
        return(
          <>
            <Card sx={{m:3,minWidth:'35%'}}>
              <CardMedia
                sx={{ height: 140 ,width:'100%'}}
                image={element.imgSRC}
                title="green iguana"
              />
              <CardContent>
                    <Typography variant="h3" color="text.secondary">
                    ₹{element.price}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {element.name}
                    </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add to cart</Button>
              </CardActions>
            </Card>
          </>
        )
       })
}
    </Box>
  );
}

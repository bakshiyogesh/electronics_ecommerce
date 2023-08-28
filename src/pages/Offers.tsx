import { FC } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import NavBar from "../components/common/Navbar";
const offerArray=[
    {imgSRC:'/2off.webp',
     coupon:'2OFF'},
    {
        imgSRC:'/6off.webp',
        coupon:'OFFER20'
    },
   {
    imgSRC:'/8off.webp',
    coupon:'8OFFER'
   },
   {
    imgSRC:'/10off.webp',
    coupon:'OFF10'
   },
   {
    imgSRC:'/12off.webp',
    coupon:'OFF12'
   },
   {
    imgSRC:'15off.webp',
    coupon:'15OFFER'
   },
   {
    imgSRC:'18off.webp',
    coupon:'18SALE'
   }
]
const Offer:FC=()=>{
    return(
        <>
        <NavBar/>
        <Grid container sx={{gap:5,mt:10}}>
        {offerArray.map((item)=>{
            return(
                <>
                <Card sx={{ width:'30vw',height:'auto'}}>
      <CardContent>
        <CardMedia
        sx={{height:'200px'}}
        image={item.imgSRC}
        title="green iguana"
      />
      </CardContent>
      <CardActions>
        <Button size="small">{item.coupon}</Button>
      </CardActions>
    </Card>
                </>
            )
        })}
        </Grid>
        </>
    )
}
export default Offer;
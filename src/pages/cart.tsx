import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
// import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Unstable_Grid2";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Card, CardMedia, Typography } from "@mui/material";
const Cart: FC = () => {
  const selector = useSelector((state: RootState) => state.ecommerce.cardData);
  console.log(selector);
  return (
    <>
      {/* <CssBaseline /> */}
      <Container sx={{marginLeft:0}}>
        <Typography variant="h3" textAlign={'center'}>Your Cart Items</Typography>
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}
        {selector.map((item) => {
          return (
            <>
              <Grid container sx={{mb:1,width:'70vw'}} >
                <Grid xs={6} xsOffset={3} md={2} mdOffset={0} sx={{mt:1,width:'30%'}}>
                  <Card sx={{ Width: '60vw'}}>
                    <CardMedia
                      sx={{ height: 140,width:'100%' }}
                      image={item.imgSRC}
                      title="green iguana"
                    />
                  </Card>
                </Grid>
                <Grid container sx={{display:'flex',padding:3,width:'70%'}} direction={'row'} justifyContent={'space-between'}>
                <Grid>
                  <Typography>Item</Typography>
                  <Typography sx={{mt:4}}>{item.name}</Typography>
                </Grid>
                <Grid>
                  <Typography>Price</Typography>
                  <Typography sx={{mt:4}}>₹{item.price}</Typography>
                </Grid>
                </Grid>
              </Grid>
            <Divider sx={{width:'60vw'}}/>
            </>
          );
        })}
      </Container>
    </>
  );
};
export default Cart;

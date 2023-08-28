import { FC } from "react";
import Container from "@mui/material/Container";
import { Box, CardMedia, Paper, Grid, Card } from "@mui/material";
// import CardMedia from '@mui/material/CardMedia';
const ProductContainer: FC = () => {
  const imageURL = "/public/vecteezy_vegetables-background.jpg";

  return (
    <>
      {/* <Box
        sx={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${imageURL})`,
        //   backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          mt:2
        }}
      /> */}
  <Grid container
        sx={{
          position:"absolute",
          width: "100vw",
          height: "100%",
          backgroundImage: `url(${imageURL})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          WebkitBackgroundSize:'cover',
          m:2
        }}
      />

        <Container sx={{backgroundImage:imageURL}}>

        </Container>
        <Grid item sx={{ width: '300px',m:4,backgroundImage:imageURL}}> 
    {/* <AliceCarousel mouseTracking items={sliderImages}/> */}
            <Card sx={{ width: '300px',m:4,backgroundImage:imageURL}}>
      {/* <CardMedia
        sx={{ height:300,objectFit:'cover'}}
        image={imageURL}
        title="green iguana"
      /> */}
      </Card>
    </Grid>

{/* <Grid container >
  <Grid item xs={12}>
  <Box
        sx={{
          position: "absolute",
          width: "100vw",
          height: "100%",
          backgroundImage: `url(${imageURL})`,
        //   backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          mt:2
        }}
      />
  </Grid>
</Grid> */}



    </>
  );
};
export default ProductContainer;

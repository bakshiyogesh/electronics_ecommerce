import { FC } from "react";
import Container from "@mui/material/Container";
import { Box, CardMedia, Paper, Grid } from "@mui/material";
// import CardMedia from '@mui/material/CardMedia';
const ProductContainer: FC = () => {
  const imageURL = "/pexels-lukas-1420702.jpeg";

  return (
    <>
      {/* <Box
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
      /> */}

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
<Grid container sx={{backgroundImage:'/pexels-lukas-1420702.jpeg'}}>

</Grid>
    </>
  );
};
export default ProductContainer;
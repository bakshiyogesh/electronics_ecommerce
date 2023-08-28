import { FC } from "react";
import Container from "@mui/material/Container";
import { Box, CardMedia, Paper, Grid } from "@mui/material";
// import CardMedia from '@mui/material/CardMedia';
const ProductContainer: FC = () => {
  const imageURL = "/public/vecteezy_vegetables-background/vecteezy_vegetables-background-with-text-space_6033469.jpg";

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
<Grid container sx={{backgroundImage:{imageURL}}}>

</Grid>
    </>
  );
};
export default ProductContainer;

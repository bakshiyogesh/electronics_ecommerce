import { FC } from "react";
import {Grid} from "@mui/material";
// import CardMedia from '@mui/material/CardMedia';
const imageContainer: FC = () => {
  const imageURL = "/public/vecteezy_vegetables-background.jpg";

  return (
    <>
  <Grid container
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${imageURL})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          WebkitBackgroundSize:'cover',
          mt:2
        }}
      />
    </>
  );
};
export default imageContainer;

import { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import NavBar from "../components/common/navbar/Navbar";
import { offerArray } from "../components/constants/constant";
const Offer: FC = () => {
  return (
    <>
      <NavBar />
      <Grid container sx={{ gap: 5, mt: 10  }} flexWrap={"wrap"} justifyContent={'center'}>
        {offerArray.map((item) => {
          return (
            <>
              <Card sx={{ width: "30vw", height: "auto" }}>
                <CardContent>
                  <CardMedia
                    sx={{ height: "200px" }}
                    image={item.imgSRC}
                    title="green iguana"
                  />
                </CardContent>
                <CardActions>
                  <Button size="small">{item.coupon}</Button>
                </CardActions>
              </Card>
            </>
          );
        })}
      </Grid>
    </>
  );
};
export default Offer;

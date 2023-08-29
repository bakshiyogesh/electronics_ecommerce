import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Grid, Button } from "@mui/material";
import SideMenuBar from "../../sideMenu/sideMenu";
import { productData} from "../../../interfaces/interface";
import { FC } from "react";
interface productArray{
  props:productData[]
}

 const ProductCard:FC<productArray> =({props})=> {
  // console.log("viewing in product card filter", productData);
  // console.log('props',props.map((item)=>item.category));
  
  return (
    <>
      <Grid container component={"section"}>
        <SideMenuBar />
        <Grid
          container
          sx={{ gap: 5, mt: 10, width: "70%" }}
          flexWrap={"wrap"}
          justifyContent={"flex-end"}
          component={"section"}
        >
          {Array.isArray(props)&&
            props.map((item) => {
              return (
                <>
                  <Card sx={{ width: "30vw", height: "auto" }} key={item.name}>
                    <CardContent>
                      <CardMedia
                        sx={{ height: "200px" }}
                        image={item.imgSRC}
                        title="green iguana"
                        key={item.name}
                      />
                      <Typography variant="subtitle2" color="text.secondary">
                        ₹{item.price}
                      </Typography>
                      <Typography variant="subtitle2">{item.name}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" variant="contained" color="success">
                        Add to cart
                      </Button>
                    </CardActions>
                  </Card>
                </>
              );
            })}
        </Grid>
      </Grid>
    </>
  );
}
export default ProductCard
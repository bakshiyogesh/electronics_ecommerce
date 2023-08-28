import { Grid, Typography } from "@mui/material";
import { FC } from "react";

const Footer:FC=()=>{
    const fullyear=new Date().getFullYear;
    return(
          <>
           <Grid sx={{ bgcolor: 'black', p: 6,width:'100%'}} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                </Typography>
                <Typography
                variant="subtitle1"
                align="center"
                color="white"
                component="p"
                >
               © 2023 Vegetable&Fruits
                </Typography>
           </Grid>
          </>
           )
}
export default Footer;
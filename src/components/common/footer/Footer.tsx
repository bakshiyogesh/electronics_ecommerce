import { Grid, Typography } from "@mui/material";
import { FC } from "react";

const Footer:FC=()=>{
    const todayDate:Date=new Date();
    const currentYear:number=todayDate.getFullYear();
    return(
          <>
           <Grid sx={{ bgcolor: 'black', p: 6,width:'100vw'}} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                </Typography>
                <Typography
                variant="subtitle1"
                align="center"
                color="white"
                component="p"
                >
               © {currentYear} Vegetable&Fruits
                </Typography>
           </Grid>
          </>
           )
}
export default Footer;
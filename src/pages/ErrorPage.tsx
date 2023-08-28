import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import NavBar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const ErrorPage:FC=()=>{
    return(
        <>
            <NavBar/>
            <Typography variant="h1" sx={{m:8}} textAlign={"center"}>404 Not Found</Typography>
        {/* <Footer/> */}
        </>
    )
}
export default ErrorPage;
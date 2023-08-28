import {Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

const ErrorPage:FC=()=>{
    return(
        <>
            <Typography variant="h1" sx={{m:8}} textAlign={"center"}>404 Not Found</Typography>
            <Typography variant="h3" textAlign={'center'}>Go back to <Link to={"/"}>Home</Link></Typography>
        </>
    )
}
export default ErrorPage;
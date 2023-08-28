import { Card, CardMedia, Grid } from '@mui/material';
import React, { FC } from 'react';
import ImageGallery from "react-image-gallery";
// import AliceCarousel from 'react-alice-carousel';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import 'react-alice-carousel/lib/alice-carousel.css';
const imageArray=['/bend-monitor.jpg','/cpu_fan.jpg','/digital-watch.jpg','gaming_laptop.jpg','/iphone.jpg','/headphones.jpg',"/wifi-extender.jpg",'/ram.jpg','/playstation.jpg']
const ImageSlider:FC=()=>{
    const sliderImages:{original:string}[]=[
        {original:'/free-delivery.webp' },
        {original:'/cash-delivery.webp'},
        {original:'/gift-voucher.webp'}
    ];
    // const sliderImages=['/free-delivery.webp','/cash-delivery.webp','/gift-voucher.webp'];
    return(
    <>
    <Grid container sx={{width:"100%"}}>
        <Grid item> 
    {/* <AliceCarousel mouseTracking items={sliderImages}/> */}
    <Slide>
        {imageArray.map((element)=>{
            return(
            <>
            <Card sx={{ width: '300px',m:4,backgroundImage:element}}>
      <CardMedia
        sx={{ height:300,objectFit:'cover'}}
        image={element}
        title="green iguana"
      />
      </Card>
            </>
            )
        })}
    </Slide>
    </Grid>
    </Grid>

    </>)
}
export default ImageSlider;
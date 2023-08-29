import { Card, CardMedia, Grid } from '@mui/material';
import { FC } from 'react';
import 'react-slideshow-image/dist/styles.css'
import 'react-alice-carousel/lib/alice-carousel.css';
const imageArray:string[]=['/public/cash-delivery.webp','/public/free-delivery.webp','/public/gift-voucher.webp'];
const ImageSlider:FC=()=>{
    // const sliderImages=['/free-delivery.webp','/cash-delivery.webp','/gift-voucher.webp'];
    return(
    <>
    <Grid container sx={{width:"100vw",m:3}} justifyItems={"center"} flexDirection={'row'} flexWrap={'wrap'}>
        <Grid item sx={{display:'flex'}} flexWrap={'wrap'} sm={12}> 
    {/* <AliceCarousel mouseTracking items={sliderImages}/> */}
    {/* <Slide>
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
    </Slide> */}
    {/* <SimpleImageSlider
        width={"700px"}
        height={"350px"}
        images={imageArray}
        showBullets={true}
        showNavs={false}
        autoPlay={true}
        autoPlayDelay={2.0}
      /> */}
      {imageArray.map((element)=>{
            return(
            <>
            <Card sx={{ width: "auto", height: "auto" ,m:1}}>
      <CardMedia
        sx={{ height:250,objectFit:'cover',width:'100%'}}
        image={element}
        title="green iguana"
      />
      </Card> </>
            )
        })}
    </Grid>
    </Grid>

    </>)
}
export default ImageSlider;
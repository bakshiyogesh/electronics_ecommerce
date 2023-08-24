import { FC } from "react";
import Container from '@mui/material/Container';
import { Box } from "@mui/material";
const ProductContainer:FC=()=>{
    const imageURL='/pexels-lukas-1420702.jpeg'
    return(
<>
<Container fixed maxWidth='lg'>
        {/* < sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <Box
      component="div"
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${imageURL})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    />
      </Container>
</>
    )
}
export default ProductContainer;
import { FC } from "react";
import NavBar from "../components/common/Navbar";
// import ProductContainer from "../components/common/ProductContainer";
import ProductCard from "../components/common/Card";
import { Grid, Container,} from "@mui/material";
import ImageSlider from "../components/ImageSlider";
import ProductContainer from "../components/common/ProductContainer";
import Footer from "../components/common/Footer";
// import "./style.css";


const HomePage:FC=()=>{
  const imageURL = "/pexels-lukas-1420702.jpeg";

 return(
<>
  
  <NavBar/>
  <ProductContainer/>
  {/* <Container/> */}
  <ProductCard />
  <ImageSlider/>
  <Footer/>

    {/* <div style={{ display: 'flex', flexDirection: 'column', marginTop: '100px' }} >

    { <ProductContainer/> }

        <div style={{ height: "60%",  width: '100%', backgroundImage: `url(${imageURL})` }}>

        </div>

        <p>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex beatae vitae eum obcaecati nulla aliquid et fugiat ullam sit tempore laborum minima minus facere, possimus tempora voluptates pariatur corrupti voluptatem! Aliquid repudiandae eligendi labore nostrum libero reprehenderit dolor, perspiciatis quaerat molestias illo sint, impedit doloribus! Maxime ea mollitia at distinctio dolorem? Quasi, a totam repellat beatae qui voluptatibus tempora adipisci magni labore consequuntur nulla tenetur unde recusandae possimus numquam animi debitis, architecto natus odit? Aliquid voluptates assumenda incidunt, corporis earum fugiat, dolore, totam neque necessitatibus blanditiis a quibusdam odit reprehenderit!
        </p>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga, dolorum consectetur praesentium minima itaque magni veniam maiores tempora nostrum delectus voluptates. Ratione repudiandae quisquam consequuntur, adipisci alias odio cumque culpa. Soluta autem vitae, perferendis quisquam doloremque esse fugiat dignissimos vel, consequuntur, maxime velit voluptatem officiis iure a debitis optio placeat rem sunt voluptas est laborum. Aliquam laudantium possimus blanditiis aliquid qui eos at magni nulla nam! Ipsam cupiditate, placeat sunt fugit quisquam saepe inventore laudantium sequi eum dolore adipisci.
        </p> */

        <div style={{ display: 'block' }}>
           
        </div>




    // </div>



/* <Stack>

    <Container sx={{ display: 'flex' }} >
        
        
        
    </Container>

    
</Stack> */}


    



{/* </Grid>     */}

</>
 )
}
export default HomePage;
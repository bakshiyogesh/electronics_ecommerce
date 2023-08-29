import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import { KeyboardArrowDown } from "@mui/icons-material";
import categoryFilter from "../common/categoryfilter/categoryFilter";
import { categoryButton } from "../constants/constant";
const SideMenuBar: FC = () => {
    
  return (
    <>
      <Grid
        component={"section"}
        justifyContent={"center"}
        columns={{ md: 4 }}
        sx={{width:'30%',height:'100%'}}
        flexDirection={'column'}
      >
        <Typography variant="h3" align="center" sx={{mt:8}}>
          Category
        </Typography>
        <List  sx={{
        maxWidth: 320,alignItems:'center'
      }}>
          <ListItem  >
            <ListItemContent>
            {categoryButton.map((element)=>{
                return(
                    <ListItemButton onClick={()=>categoryFilter(element)}>
                        <ListItemDecorator>
                        {element}< KeyboardArrowDown/>
                        </ListItemDecorator>
                    </ListItemButton>
                )
            })}
            </ListItemContent>
          </ListItem>
        </List>
      </Grid>
    </>
  );
};
export default SideMenuBar;

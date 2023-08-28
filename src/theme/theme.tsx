import { createTheme } from "@mui/material";
import grey from "@mui/material/colors/grey";
const themeCustom={
    theme:createTheme({
        palette:{
            primary:{
                main:'#01579b',
                light:'#e1f5fe'
            },
            secondary:{
                main:"#2c89b2",
                light: '#F5EBFF'
            }
        }
    }),
    darkTheme:createTheme({
        palette:{
            mode:'dark',
            text: {
                primary: grey[900],
                secondary: grey[800],
              }
        }
    }),
    textFamily:createTheme({
        typography:{
            fontFamily:[
                'apple-system',
                "Segoe UI",
                "Roboto",
                "Arial",
                'sans-serif',
            ].join(","),
            h1:{
                fontSize:'1.2rem',
                '@media (min-width:600px)':{
                    fontSize:'1.5rem',
                },
            }
        },

    })
}

export default themeCustom;
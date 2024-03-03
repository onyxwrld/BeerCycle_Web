import { AppBar, Box, Button, IconButton, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";

export function Navbar(){
    const [fix,setFix] = useState(false);

    function setFixed()
    {
        if(window.scrollY >= 300)
        {
            setFix(true)
        }
        else{
            setFix(false)
        }
    }
    const theme = createTheme({
        palette:{
            primary:{
                main: '#F2C879',
                light: '#FF9518',
                dark: '#8A2A23'
            }
        }
    })

    window.addEventListener("scroll",setFixed);
    return(
        <ThemeProvider theme={theme}>
        <AppBar position="static">
            <Toolbar>
                <img src="src/Images/logo2.png" className="logo"/>
                
                <Box sx={{ flexGrow: -1 }}>
                    <Button color="inherit">Galléria</Button>
                    <Button color="inherit">Szabályzat</Button>
                    <Button color="inherit">Étlap</Button>
                    <Button color="inherit">Bejelentkezés</Button>
                </Box>
                
            </Toolbar>
        </AppBar>
        </ThemeProvider>
    )
}
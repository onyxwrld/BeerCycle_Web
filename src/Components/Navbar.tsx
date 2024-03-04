import { AppBar, Box, Button, IconButton, ThemeProvider, Toolbar, Typography, createTheme, makeStyles } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

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
    return<div><ThemeProvider theme={theme}>
            <AppBar position="fixed">
                <Toolbar>
                    <Box style={{float: "left"}}>
                        <Button color="inherit"><Link to="gallery">Galléria</Link></Button>
                        <Button color="inherit"><Link to="rules">Szabályzat</Link></Button>
                        <Button color="inherit"><Link to="menu">Étlap</Link></Button>
                        <Button color="inherit"><Link to="login">Bejelentkezés</Link></Button>
                    </Box>

                </Toolbar>
            </AppBar>
        </ThemeProvider>
        </div>
}
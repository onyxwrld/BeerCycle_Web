import { AppBar, Box, Button, IconButton, ImageListItem, ThemeProvider, Toolbar, Typography, createTheme, makeStyles } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Guest, LoggedIn } from "./Auth/loginAuth";



export function Navbar() {
    const [fix, setFix] = useState(false);

    function setFixed() {
        if (window.scrollY >= 300) {
            setFix(true)
        }
        else {
            setFix(false)
        }
    }



    window.addEventListener("scroll", setFixed);
    return <div>
            <AppBar position="fixed">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Link to='/'>
                            <img src="src/Images/logo2.png" alt="BeerCycle logo" className="logo" style={{ width: "50px", height: "50px" }} />
                        </Link>
                    </Box>
                    <Box display="flex" justifyContent="flex-end">
                        <Button color="inherit"><Link to="gallery">Galléria</Link></Button>
                        <Button color="inherit"><Link to="rules">Szabályzat</Link></Button>
                        <Button color="inherit"><Link to="menu">Étlap</Link></Button>
                        <Button color="inherit" id="loginButton"><Link to="menu">Étlap</Link></Button>
                    </Box>
                </Toolbar>
            </AppBar>
    </div>
}
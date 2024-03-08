import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, NavLink } from "react-router-dom";
import { Guest, LoggedIn } from "./Auth/loginAuth";
import { IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "./Auth/ApiProvider";
import DrawerSide  from "./Drawer";
import BasketDrawer from "./BasketDrawer";

export function Navbar() {

    
    const [openProfile,setOpen] = useState(false);
    const [openBasket,setOpenBasket] = useState(false);
    function toggleProfile(){
        return setOpen(!openProfile);
        
    }
    function toggleBasket(){
        return setOpenBasket(!openBasket);
        
    }
    return  <>
    <AppBar position="fixed" >
        <Toolbar>
            <Typography sx={{flexGrow:1}}>
                    <Link to='/'><img src="src/Images/logo2.png" className="logo" /></Link>
            </Typography>
            <Box>
                <Button><Link to="gallery">Galléria</Link></Button>
                <Button color="inherit"><Link to="rules">Szabályzat</Link></Button>
                <Button color="inherit"><Link to="menu">Étlap</Link></Button>
                <LoggedIn>
                        <IconButton onClick={toggleProfile}>
                        <DrawerSide isOpen={openProfile} onClose={()=>setOpen(false)} />
                            <AccountCircleIcon/>
                        </IconButton>
                        <IconButton onClick={toggleBasket} >
                            <BasketDrawer isOpen={openBasket} onClose={()=>setOpenBasket(false)}/>
                            <ShoppingCartIcon />
                        </IconButton>
                    </LoggedIn>
                <Button color="inherit">
                    <Guest>
                        <NavLink to="login" id="loginButton">Belépés</NavLink>
                    </Guest>
                </Button>
               
            </Box>
        </Toolbar>
   
    </AppBar>
         
    </>
}
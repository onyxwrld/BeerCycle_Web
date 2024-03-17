import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, NavLink } from "react-router-dom";
import { Guest, LoggedIn } from "./Auth/loginAuth";
import { Badge, IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "./Auth/ApiProvider";
import DrawerSide from "./Drawer";
import BasketDrawer from "./BasketDrawer";
import { MenuContext } from "./Auth/MenuProvider";

export function Navbar() {

    const api = useContext(MenuContext);
    const menu = localStorage.getItem('menu');
    const [openProfile, setOpen] = useState(false);
    const [openBasket, setOpenBasket] = useState(false);
    //let count = localStorage.getItem('basketCount');
   // let basketCount = JSON.parse(count!);
    const [basketCount, setBasketCount] = useState<number>(0);

    useEffect(() => {
        const count = localStorage.getItem('basketCount');
        setBasketCount(count ? JSON.parse(count) : 0);
    }, [api]);
    
    function toggleProfile() {
        return setOpen(!openProfile);

    }
    function toggleBasket() {
        return setOpenBasket(!openBasket);

    }
    return <>
        <AppBar position="sticky">
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }}>
                    <Link to='/'><img src="src/Images/logo2.png" className="logo" /></Link>
                </Typography>
                <Box>
                    <Button><Link to="/gallery">Galléria</Link></Button>
                    <Button color="inherit"><Link to="/rules">Szabályzat</Link></Button>
                    <Button color="inherit"><Link to="/menu">Étlap</Link></Button>
                    <LoggedIn>
                        <IconButton onClick={toggleProfile}>
                            <DrawerSide isOpen={openProfile} onClose={() => setOpen(false)} />
                            <AccountCircleIcon />
                        </IconButton>
                        <Badge badgeContent={basketCount} color={'warning'}>
                            <IconButton onClick={toggleBasket} >
                                <BasketDrawer isOpen={openBasket} onClose={() => setOpenBasket(false)} />
                                <ShoppingCartIcon />
                            </IconButton>
                        </Badge>
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
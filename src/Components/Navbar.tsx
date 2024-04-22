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
import { useState } from "react";
import DrawerSide from "./Drawer";
import { useBasket } from "./Auth/BasketContext";
import BasketDrawer from "./BasketDrawer";
/**
 * Navbar - A fő navigációs komponens, amely integrálja a felhasználói interakciókat és navigációt.
 * 
 * A komponens felhasználói autentikációtól függően különböző linkeket és vezérlőket jelenít meg.
 * Használja a `useBasket` hookot a kosár állapotának kezelésére.
 */
export function Navbar() {

    const [openProfile, setOpen] = useState(false);  // Profil fiók ablak állapotának kezelése.
    const [openBasket, setOpenBasket] = useState(false);  // Kosár ablak állapotának kezelése.
    const { itemCount, updateBasketContent } = useBasket();  // Kosár tartalmának és elemek számának lekérdezése.
    /**
        * toggleProfile - Kapcsolja a profil fiók ablak megjelenítését.
        */
    function toggleProfile() {
        return setOpen(!openProfile);

    }
    /**
     * toggleBasket - Kapcsolja a kosár ablak megjelenítését.
     */
    function toggleBasket() {
        return setOpenBasket(!openBasket);

    }

    return <>
        <AppBar position="sticky">
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }}>
                    <Link to='/'><img src="/Images/logo2.png" className="w-1/12 hover:scale-110 ease-in-out transition" /></Link>
                </Typography>
                <Box>
                    <LoggedIn>
                        <Button ><Link to="/gallery" className="transition ease-in-out duration-300 transform hover:scale-300 hover:bg-bloodRed hover:border-bloodRed hover:rounded-2xl rounded-2xl text-black hover:text-amber py-2 px-2">Galléria</Link></Button>
                        <Button ><Link to="/rules" className="transition ease-in-out duration-300 transform hover:scale-300 hover:bg-bloodRed hover:border-bloodRed hover:rounded-2xl rounded-2xl text-black hover:text-amber py-2 px-2">Szabályzat</Link></Button>
                        <Button ><Link to="/menu" className="transition ease-in-out duration-300 transform hover:scale-300 hover:bg-bloodRed hover:border-bloodRed hover:rounded-2xl rounded-2xl text-black hover:text-amber py-2 px-2">Étlap</Link></Button>
                        <IconButton onClick={toggleProfile}>
                            <DrawerSide isOpen={openProfile} onClose={() => setOpen(false)} />
                            <AccountCircleIcon className="transition ease-in-out duration-300 transform hover:scale-300 hover:bg-bloodRed hover:border-bloodRed hover:rounded-2xl rounded-2xl text-black hover:text-amber" />
                        </IconButton>
                        <Badge badgeContent={itemCount} color={'warning'}>
                            <IconButton onClick={toggleBasket} >
                                <BasketDrawer isOpen={openBasket} onClose={() => setOpenBasket(false)} />
                                <ShoppingCartIcon className="transition ease-in-out duration-300 transform hover:scale-300 hover:bg-bloodRed hover:border-bloodRed hover:rounded-2xl rounded-2xl text-black hover:text-amber" />
                            </IconButton>
                        </Badge>
                    </LoggedIn>
                    <Guest>
                        <Button><Link to="/gallery">Galléria</Link></Button>
                        <Button><Link to="/rules">Szabályzat</Link></Button>
                        <Button><Link to="/menu">Étlap</Link></Button>
                        <Button color="inherit">
                            <NavLink to="login" id="loginButton">Belépés</NavLink>
                        </Button>
                    </Guest>
                </Box>
            </Toolbar>

        </AppBar>

    </>
}
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
import { useContext, useEffect, useRef, useState } from "react";
import DrawerSide from "./Drawer";
import BasketDrawer from "./BasketDrawer";
import { Basket } from "../Interfaces/Basket";

export function Navbar() {

    const [openProfile, setOpen] = useState(false);
    const [openBasket, setOpenBasket] = useState(false);
    const token = localStorage.getItem('token');
    const [count, setCount] = useState<Basket[]>([]);
    let totalCount = 0;

    function toggleProfile() {
        return setOpen(!openProfile);

    }
    function toggleBasket() {
        return setOpenBasket(!openBasket);

    }
    function calcBasketCount(baskets: Basket[]): number {
        if (baskets.length > 0) {
            baskets.forEach(basket => {
                totalCount += basket.menu.length;
            });
            return totalCount;
        }
        else {
            return 0;
        }
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/basket', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                })
                const data = await response.json();
                setCount(data);
            } catch (error) {
                setCount([]);
            }
        };

        fetchData();
    }, []);

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
                            <AccountCircleIcon className="transition ease-in-out duration-300 transform hover:scale-300 hover:bg-bloodRed hover:border-bloodRed hover:rounded-2xl rounded-2xl text-black hover:text-amber"/>
                        </IconButton>
                        <Badge badgeContent={calcBasketCount(count)} color={'warning'}>
                            <IconButton onClick={toggleBasket} >
                                <BasketDrawer isOpen={openBasket} onClose={() => setOpenBasket(false)} />
                                <ShoppingCartIcon className="transition ease-in-out duration-300 transform hover:scale-300 hover:bg-bloodRed hover:border-bloodRed hover:rounded-2xl rounded-2xl text-black hover:text-amber"/>
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
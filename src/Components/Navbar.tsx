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
import { ApiContext } from "./Auth/ApiProvider";
import DrawerSide from "./Drawer";
import BasketDrawer from "./BasketDrawer";
import { MenuContext } from "./Auth/MenuProvider";
import { Basket } from "../Interfaces/Basket";

export function Navbar() {

    const [openProfile, setOpen] = useState(false);
    const [openBasket, setOpenBasket] = useState(false);
    const token = localStorage.getItem('token');
    const [count,setCount] = useState<Basket[]>([]);
    let totalCount = 0;

    function toggleProfile() {
        return setOpen(!openProfile);

    }
    function toggleBasket() {
        return setOpenBasket(!openBasket);

    }
    function calcBasketCount(baskets: Basket[]): number {
      if(baskets.length>0)
      {
        baskets.forEach(basket => {
            totalCount += basket.menu.length;
        });
        return totalCount;
    }
    else{
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
    }, [count]);

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
                        <Badge badgeContent={calcBasketCount(count)} color={'warning'}>
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
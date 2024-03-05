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
import { useContext } from "react";
import { ApiContext } from "./Auth/ApiProvider";

export function Navbar() {
    /*const [fix, setFix] = useState(false);

    function setFixed() {
        if (window.scrollY >= 300) {
            setFix(true)
        }
        else {
            setFix(false)
        }
         <Button color="inherit"><Link to="gallery">Galléria</Link></Button>
                    <Button color="inherit"><Link to="rules">Szabályzat</Link></Button>
                    <Button color="inherit"><Link to="menu">Étlap</Link></Button>
                    <Button color="inherit" id="loginButton"><Link to="menu">Étlap</Link></Button>
        window.addEventListener("scroll", setFixed);
    }*/
    return <AppBar position="fixed" >
        <Toolbar>
            <Typography>
                <img src="src/Images/logo2.png" className="logo" />
            </Typography>
            <Box>
                <Button><Link to="gallery">Galléria</Link></Button>
                <Button color="inherit"><Link to="rules">Szabályzat</Link></Button>
                <Button color="inherit"><Link to="menu">Étlap</Link></Button>
                <Button color="inherit">
                <LoggedIn>
                    <IconButton>
                        <AccountCircleIcon />
                    </IconButton>
                    <IconButton>
                        <ShoppingCartIcon />
                    </IconButton>
                </LoggedIn>
                <Guest>
                    <NavLink to="login" id="loginButton">Belépés</NavLink>
                </Guest>
                </Button>
            </Box>
        </Toolbar>
    </AppBar>
}
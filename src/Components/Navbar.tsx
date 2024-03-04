import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Guest, LoggedIn } from "./Auth/loginAuth";
import { IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


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
                 <img src="src/Images/logo2.png" className="logo"/>
                </Typography>  
                <Box>
                <Button color="inherit"><Link to="gallery">Galléria</Link></Button>
                    <Button color="inherit"><Link to="rules">Szabályzat</Link></Button>
                    <Button color="inherit"><Link to="menu">Étlap</Link></Button>
                    <Button color="inherit" id="loginButton">
                        <Guest>
                        <Link to="login">Belépés</Link>
                        </Guest>
                        <LoggedIn>
                            <IconButton>
                                <AccountCircleIcon></AccountCircleIcon>
                            </IconButton>
                        </LoggedIn>
                    </Button>
                </Box>  
            </Toolbar>
        </AppBar>
}
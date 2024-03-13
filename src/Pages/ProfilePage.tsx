import Box from "@mui/material/Box"
import { Navbar } from "../Components/Navbar"
import { useContext, useEffect, useState } from "react"
import { ApiContext } from "../Components/Auth/ApiProvider"
import { Drawer, Grid, List, ListItemButton, ListItemIcon, ListItemText, TextField, Toolbar, Typography } from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Guest, LoggedIn } from "../Components/Auth/loginAuth";
import SignIn from "./Login";
import Textarea from '@mui/joy/Textarea';
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { ReviewComponent } from "../Components/ReviewComp";
import { Review } from "../Interfaces/Review";

export function ProfilePage() {
    const navigate = useNavigate();

    return <>
        <LoggedIn>
            <Navbar />
            <Box sx={{ m: 15, borderRadius: 2, boxShadow: 4 }}>
                <Grid container spacing={2}>
                    <Grid item spacing={4}>
                        <List>
                            <Link to='user_data'>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AccountCircleIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Felhasználói adatok
                                </ListItemText>
                            </ListItemButton>
                            </Link>
                            <Link to='history'>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <HistoryIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Foglalási előzmények
                                    </ListItemText>
                                </ListItemButton>
                            </Link>
                            <Link to='my_reviews'>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ChatBubbleOutlineIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Vélemények
                                    </ListItemText>
                                </ListItemButton>
                            </Link>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Kijeletnkezés
                                </ListItemText>
                            </ListItemButton>
                        </List>
                    </Grid>
                    <Grid>
                        <Outlet />
                    </Grid>
                </Grid>
            </Box>
        </LoggedIn>
        <Guest>
            <SignIn />
        </Guest>
    </>
}
export function User_data() {
    const api = useContext(ApiContext);
    return <>
        <Grid container direction="column" >
            <Grid sx={{ m: 2 }}><TextField label="Email" variant="outlined" value={api.currentUser?.email} disabled /></Grid>
            <Grid sx={{ m: 2 }}><TextField label="Vezetéknév" variant="outlined" value={api.currentUser?.last_name} disabled /></Grid>
            <Grid sx={{ m: 2 }}> <TextField label="Keresztnév" variant="outlined" value={api.currentUser?.first_name} disabled /></Grid>
            <Grid sx={{ m: 2 }}><TextField label="Felhasználó név" variant="outlined" value={api.currentUser?.username} disabled /></Grid>
        </Grid>
    </>
}

export function History() {
    return <p>history</p>
}

export function MyReviews(){
    const api = useContext(ApiContext);
    const [review,setReviews] = useState<Review[] | undefined>();
    useEffect(() => {
        api.userReview().then(reviews => setReviews(reviews))
    }, []);
    <Box>
        <Textarea placeholder="Placeholder" minRows={2} />
    </Box>
    return <>
    {review && review.map((rev, index) => (
                    <ReviewComponent key={index} rate={rev.rate} content={rev.content} username={rev.user.username} id={rev.id} isMainPage={false}/>
            ))}
    </>
    
}
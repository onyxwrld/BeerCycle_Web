import Box from "@mui/material/Box"
import { Navbar } from "../Components/Navbar"
import { useContext, useEffect, useState } from "react"
import { ApiContext } from "../Components/Auth/ApiProvider"
import { Button, Drawer, Grid, List, ListItemButton, ListItemIcon, ListItemText, Rating, TextField, Toolbar, Typography } from "@mui/material";
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
import ReservationCard from "../Components/historyFoglalas";
import { Reservation } from "../Interfaces/Reservation";

export function navigateTo({ to }: { to: string }) {
    const navigate = useNavigate();
    return navigate(to);
}
const token = localStorage.getItem('token');
export function ProfilePage() {
    return <>
        <LoggedIn>
            <Navbar />
            <Box sx={{ m: 15, borderRadius: 2, boxShadow: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
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
                    <Grid item xs={9}>
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
    const [reservations, setReservations] = useState<Reservation[]>([]);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await fetch('http://localhost:3000/reservation', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Reservation[] = await response.json();
                setReservations(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchReservations();
    }, []);
    return <Grid container spacing={3}>
    <ReservationCard foglalas={reservations} />
    </Grid>
}

export function MyReviews() {
    const api = useContext(ApiContext);
    const [rate, setRate] = useState<number | null>(2);
    const [review, setReviews] = useState<Review[] | undefined>();
    const [content, setContent] = useState<string | null>();

    function load() {
        api.userReview().then(reviews => setReviews(reviews))
    }

    useEffect(() => {
        load();
    }, [review]);

    const handleChange = () => {

        const token = localStorage.getItem('token');
        const bodyReview = {
            rate: rate,
            content: content
        }
        try {
            async function post() {
                const response = await fetch('http://localhost:3000/review', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(bodyReview)
                })
                if (!response.ok) {
                    console.log(response);
                }
                else {
                    setRate(2);
                    setContent('');
                }
            }
            post();
        }
        catch {

        }

    }

    return <>
        <Grid>
            <Grid>
                <Rating
                    name="simple-controlled"
                    value={rate}
                    onChange={(event, newValue) => {
                        setRate(newValue);
                    }}
                />
                <TextField id="outlined-basic" label="Vélemény" variant="outlined" value={content} onChange={(e) => {
                    setContent(e.currentTarget.value)
                }} />
                <Button id="loginButton" onClick={() => {
                    handleChange(),
                        load()
                }}>Küldés </Button>
            </Grid>
            <Grid >

                {review && review.map((rev, index) => (
                    <ReviewComponent key={index} rate={rev.rate} content={rev.content} username={rev.user.username} id={rev.id} isMainPage={false} onDelete={load} />
                ))}
            </Grid>
        </Grid>
    </>

}
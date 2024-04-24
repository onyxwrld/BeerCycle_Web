import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ApiContext } from '../Components/Auth/ApiProvider';
import MySvg from '../Images/SVG/Untitled.svg';
/**
 * A Login page inputokból áll ami bekéri a felhasználó adatát, majd egy ellenörzésen végig megy hogy jól töltötte ki az inputokat majd egy objektbe csomagolva küldi tovább az api provider részére ahol feldolgozásra kerül az adat szerkezet
 */
function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit">
                BeerCycle
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

/**
 * 
 * @returns Ellenőrzi hogy létezik e ilyen felhaszánló, és generál egy token-t amivel bejenlentkezhet a felhasználól.
 */
export default function SignIn() {
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const api = useContext(ApiContext);
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPass(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        api.login(userName, pass)
            .then(() => {
                setLoginError('');
                setUserName('');
                setPass('');
                api.snackBarFunction('Sikeres bejelentkezés',false)
                navigate('/');
                
            })
            .catch((e: Error) => {
                setLoginError(e.message);
                api.snackBarFunction('Sikertlen bejelentkezés',true)
            })
    };

    return (
        <Container component="main" sx={{
            marginTop: 20
        }}>

            <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={8}>
                    <div>
                    <object type="image/svg+xml" data={MySvg}>svg-animation</object>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <Box>
                        <Typography component="h1" variant="h5">
                            Bejelentkezés
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Felhasználó név"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                value={userName}
                                onChange={handleUsernameChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Jelszó"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={pass}
                                onChange={handlePasswordChange}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Bejelentkezés
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="register" variant="body2">
                                        {"Nincs fiókja? Regisztráljon"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}
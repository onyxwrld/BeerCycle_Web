import * as React from 'react';
import Button from '@mui/material/Button';
import { CssBaseline } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ApiContext } from '../Components/Auth/ApiProvider';
import MySvg from '../Images/SVG/Untitled.svg';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            BeerCycle{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

/**
 * A register page inputokból áll ami bekéri a felhasználó adatát, majd egy ellenörzésen végig megy hogy jól töltötte ki az inputokat majd egy objektbe csomagolva küldi tovább az api provider részére ahol feldolgozásra kerül az adat szerkezet
 */
export default function SignUp() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [pass, setPass] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const [error, setErrorUserName] = useState(false);
    const [errorEmail, setEmailError] = useState(false);
    const [errorVez, setVezError] = useState(false);
    const [errorKer, setKerError] = useState(false);
    const [errorPass, setPassError] = useState(false);
    const api = useContext(ApiContext);

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
        if (event.target.value.trim() === '') {
            setErrorUserName(true);
        } else {
            setErrorUserName(false);
        }
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.includes(' ')) {
            return
        }
        else {
            setPass(event.target.value);
        }
        if (event.target.value.trim() === '' || (pass.length < 6)) {
            setPassError(true);
        } else {
            setPassError(false);
        }
    };
    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
        if (event.target.value.trim() === '') {
            setVezError(true);
        } else {
            setVezError(false);
        }
    };
    const handlelFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
        if (event.target.value.trim() === '') {
            setKerError(true);
        } else {
            setKerError(false);
        }
    };
    const handleEmailAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        if (event.target.value.trim() === '') {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (await api.register(userName, pass, email, firstName, lastName)) {
            api.snackBarFunction('Sikeres regisztáció', false)
            setLoginError('');
            setUserName('');
            setPass('');
            setEmail('');
            setLastName('');
            setFirstName('');
            navigate('/login')
        }
        else {
            if (userName.trim() === '') {
                setErrorUserName(true);
            } else {
                setErrorUserName(false);
            }
            if (pass.trim() === '') {
                setPassError(true);
            } else {
                setPassError(false);
            }
            if (firstName.trim() === '') {
                setKerError(true);
            } else {
                setKerError(false);
            }
            if (lastName.trim() === '') {
                setVezError(true);
            } else {
                setVezError(false);
            }
            if (email.trim() === '') {
                setEmailError(true);
            } else {
                setEmailError(false);
            }
            api.snackBarFunction('Sikertlen regisztáció', true)
        }

    };

    return (
        <Container component="main" sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 20
        }}>

            <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={8}>
                    <object type="image/svg+xml" data={MySvg}>svg-animation</object>
                </Grid>
                <Grid item xs={4}>
                    <Box>
                        <Typography component="h1" variant="h5">
                            Regisztáció
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                error={error}
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
                                error={errorEmail}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email cím"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={handleEmailAddress}
                            />
                            <TextField
                                error={errorVez}
                                margin="normal"
                                required
                                fullWidth
                                id="vezeteknev"
                                label="Vezetéknév"
                                name="vezeteknev"
                                autoComplete="vezeteknev"
                                autoFocus
                                value={lastName}
                                onChange={handleLastNameChange}
                            />
                            <TextField
                                error={errorKer}
                                margin="normal"
                                required
                                fullWidth
                                id="keresztnev"
                                label="Keresztnév"
                                name="keresztnev"
                                autoComplete="keresztnev"
                                autoFocus
                                value={firstName}
                                onChange={handlelFirstNameChange}
                            />
                            <TextField
                                error={errorPass}
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
                                Regisztráció
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}
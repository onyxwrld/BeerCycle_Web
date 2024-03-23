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


export default function SignUp() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
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
    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };
    const handlelFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };
    const handleEmailAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        api.register(userName, pass,email,firstName,lastName)
            .then(() => {
                setLoginError('');
                setUserName('');
                setPass('');
                setEmail('');
                setLastName('');
                setFirstName('');
                navigate('/login');
            })
            .catch((e: Error) => {
                setLoginError(e.message);
            })
    };

    return (
        <Container component="main" sx={{
            marginTop: 2
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
                                id="email"
                                label="Email cím"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={handleEmailAddress}
                            />
                            <TextField
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
                            <Link to='/login'>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Regisztráció
                            </Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}
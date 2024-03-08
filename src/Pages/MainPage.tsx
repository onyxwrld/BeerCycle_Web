import Card from "@mui/material/Card"
import { AnimButton } from "../Components/anim_button"
import { Button, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Typography } from "@mui/material"
import SportsBarIcon from '@mui/icons-material/SportsBar';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import { Link } from "react-router-dom";
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export function Fooldal() {
    return <div className="container">
        <div className="hero-section">
            <img src="src/Images/BeerCycleText.png" id="BeerCycleLogo" />
            <img src="src/Images/heroSection.png" id="hero-sectionLogo" />
            <AnimButton />
        </div>
        <div className="second-section">
            <Grid sx={{sx:3,md:3}}>
            <div className="shape">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            </Grid>
            <div className="bulletPointContainer">
                <div style={{ marginTop: '50px' }}>
                    <Container>
                        <Grid container spacing={1}>
                            <Card sx={{ maxWidth: 345, mx: 2 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="src/Images/ham.png"
                                    title="Étlap"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Fogyassz korlátok nélkül<IconButton><SportsBarIcon></SportsBarIcon></IconButton>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Az általad kiválaszott biciglire korátlan mennyiségű ételt és italt szállitunk izlésed szerint!
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to="menu">
                                        <Button size="small">Válogass étlapunkból</Button>
                                    </Link>

                                </CardActions>
                            </Card>
                            <Card sx={{ maxWidth: 345, mx: 2 }}>

                                <CardMedia
                                    sx={{ height: 140 }}
                                    title="Biciglik"
                                    image="src/Images/bicycle.png"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Több méretű bicikli<IconButton>
                                            <DirectionsBikeIcon></DirectionsBikeIcon>
                                        </IconButton>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Válassz személyre szabott, saját ízlésednek megfelelő biciklit.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to='rolunk'><Button size="small">Fedezd fel BeerCycle-t</Button></Link>
                                </CardActions>
                            </Card>
                            <Card sx={{ maxWidth: 345, mx: 2 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="src/Images/beer1.png"
                                    title="galleryPromo"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Látogass el gallériánkba<IconButton><CameraAltIcon></CameraAltIcon></IconButton>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Több tucat vendégünk készitett élmény fotót nagyszerű menetükről.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to="gallery"> <Button size="small">Irány a galléria</Button></Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Container>
                </div>
            </div>
        </div>
        <div className="review-section">
        </div>
        <div className="mobil-section">
            <h2>
                Töltsd le mobil alkalmazásunkat!
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis explicabo beatae, ex quam, facilis ea voluptates rerum, eaque dolore quis distinctio qui modi nesciunt aperiam itaque ut esse! Reiciendis, est!
            </p>
            <button>
                Letöltöm!
            </button>
        </div>
    </div>
}
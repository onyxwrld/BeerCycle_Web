import Card from "@mui/material/Card"
import { AnimButton } from "../Components/anim_button"
import { Button, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Typography } from "@mui/material"
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { Link } from "react-router-dom";

export function Fooldal() {
    return <div className="container">
        <div className="hero-section">
            <img src="src/Images/BeerCycleText.png" id="BeerCycleLogo" />
            <img src="src/Images/heroSection.png" id="hero-sectionLogo" />
            <AnimButton />
        </div>
        <div className="second-section">
            <div className="shape">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="bulletPointContainer">
                <div>
                    <Container>
                    <Grid  container spacing={1} sx={{ }}>
                    <Card sx={{ maxWidth: 345,mx: 2 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image=""
                            title="Étlap"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Fogyassz korlátok nélkül
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
                    <Card sx={{ maxWidth: 345,mx: 2 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image=""
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345,mx: 2 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image=""
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    </Container>
                </div>
            </div>
        </div>
        <div className="review-section">
            <h2>
                Visszajelzések
            </h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, odit error aliquid velit impedit soluta exercitationem eaque repudiandae dolorem, consequatur optio possimus iusto harum cupiditate minus nihil hic distinctio facere!
            </p>
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
import Card from "@mui/material/Card"
import { AnimButton } from "../Components/anim_button"
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Typography } from "@mui/material"
import SportsBarIcon from '@mui/icons-material/SportsBar';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import { Link } from "react-router-dom";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";
import { Review } from "../Interfaces/Review";
import { ReviewComponent } from "../Components/ReviewComp";
import ReactFullpage from "@fullpage/react-fullpage";

const anchors = ["firstPage", "secondPage", "thirdPage"];
export function Fooldal() {
    return <div className="container">
        <section className="hero-section">
            <img src="src/Images/BeerCycleText.png" id="BeerCycleLogo" />
            <img src="src/Images/heroSetcion_ujitott.png" id="hero-sectionLogo" />
            <AnimButton />
        </section>
        <section className="second-section">
            <Grid sx={{ sx: 3, md: 3 }}>
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
        </section>
        <ReviewList/>
        <section className="faq-section">
            <h2>Gyakran ismételt kérdéseink</h2>
            <Container >
                <Grid sx={{m:2}} rowGap={2}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>Hogyan mondhatom le a foglalásomat?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Bejelentkezéskor a profilod előzmények beállitásánal jelenik meg a foglalásod. Fontos, hogy ezt csak az általad beállított dátum előtt egy nappal lesz lehetőséged lemondani.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel2-header"
                            >
                                <Typography>Hol vehető igénybe a BeerCycle<sup>TM</sup></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                   Mikor leadtad a rendelésed a biciglit az általad kiválaszott a címre elszállítjuk, majd miután megtetted az utad egy általunk támogatott gépkocsi vissza szállítja telephelyünkre.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel3-header"
                            >
                                <Typography>Hogyan működik a fizetés?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Foglalj egy általad választott biciglit minden tartozékvával. Majd ez a foglalás bekerül ügyintézőnkhöz. Munkatársunk gondoskodik a bicigli összeállitásával és szállitásával. Majd helyszinen átvételkor letétbe kell helyezni bármely iratát. Amit a bicigli leadásakor vissza kap. Ekkor kell a fizetést is lebonyolitani.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel4-header"
                            >
                                <Typography>Megsérültem a bicigli haszálatakor, kihez forduljak?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Ha megsérült biciklizés közben, javasoljuk, hogy először forduljon orvoshoz és értesítse a rendőrséget, ha szükséges. Fontos megjegyezni, hogy cégünk nem vállal felelősséget személyi sérülésekért. Kérjük, vegyék figyelembe, hogy termékünk biztonságos használatára való felelősségteljes figyelemmel kell eljárni.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                </Grid>
            </Container>
        </section>
        <section className="mobil-section">

            <Box
                component="img"
                sx={{
                    m: 10,
                    borderRadius: 3,
                    boxShadow: 4,
                    position: 'relative'

                }}
                alt="The house from the offer."
                src="src/Images/mobilDownload.png"
            />
            <Button sx={{ zIndex: 1, position: 'absolute' }}>
                Letöltés
            </Button>
        </section>
    </div>
}
export function ReviewList() {
    const [review, setReviews] = useState<Review[] | undefined>();

    async function name() {
        const response = await fetch('http://localhost:3000/review', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const responseData = await response.json() as Review[];
        setReviews(responseData);    
    }  
    useEffect(()=>{
        name();
    },[])
    const filteredReviews = review?.filter(item => item.rate > 3).slice(0, 3);
    const shuffledReviews = shuffleArray(filteredReviews);
    const selectedReviews = shuffledReviews!.slice(0, 3);
    return (
        <section className="review-section">
        <Grid>
            {
                filteredReviews && filteredReviews.map((item, index) => {
                    return <ReviewComponent content={item.content} key={index} isMainPage={true} id={item.id} username={item.user.username} rate={item.rate} onDelete={name} />;
                })
            }
        </Grid>
        </section>
    );
}
function shuffleArray(array: Review[]| undefined) {
    if (!array) return [];
    for (let i = array!.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array![i], array![j]] = [array![j], array![i]];
    }
    return array;
}
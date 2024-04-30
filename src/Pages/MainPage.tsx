import Card from "@mui/material/Card"
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, CardContent, CardMedia, Container, Grid, IconButton, Typography } from "@mui/material"
import CardActions from '@mui/material/CardActions';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import { Link } from "react-router-dom";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";
import { Review } from "../Interfaces/Review";
import { ReviewComponent } from "../Components/ReviewComp";
import MySvg from '../Images/SVG/bottom.svg';
import { Guest, LoggedIn } from "../Components/Auth/loginAuth";
import { useMediaQuery, useTheme, width } from "@mui/system";
/**
 * A főoldalra beégetett adatokat megjelniti.
 */
export function Fooldal() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    return <div className="container">
        <section className="">
            <div className="relative">
                <img src="/Images/heroSetcion_ujitott.png" id="hero-sectionLogo" className="absolute inset-0 z-0 h-max lg:w-full lg:h-full object-fill" />
                <img src="/Images/BeerCycleText.png" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 sm:w-3/4 transition ease-in-out hover:scale-110" />
                <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 z-10">
                    <LoggedIn>
                        <Link to='/reservation'><button className="bg-bloodRed hover:bg-bloodRed hover:text-amber font-bold text-white text-xl py-4 px-8 rounded-xl hover:rounded-xl transition hover:scale-150 ease-in-out">Foglalj</button></Link>
                    </LoggedIn>
                    <Guest>
                        <Link to='/login'><button className="bg-bloodRed hover:bg-bloodRed hover:text-amber font-bold text-white text-xl py-4 px-8 rounded-xl hover:rounded-xl transition hover:scale-150 ease-in-out">Foglalj</button></Link>
                    </Guest>

                </div>
            </div>

        </section>
        <section className="second-section">
            <Grid sx={{ sx: 3, md: 3 }}>
                <div className="shape">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </Grid>

            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} lg={4}>
                    <Card sx={{ maxWidth: isMediumScreen ? '30%' : 
                 '80%'
                    , mx: 2, borderRadius: '15px' }} className="hover:scale-110 transition ease-out">
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/Images/ham.png"
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
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                    <Card sx={{ maxWidth: isMediumScreen ? '30%' : 
                 '80%', mx: 2, borderRadius: '15px' }} className="hover:scale-110 transition ease-out">

                        <CardMedia
                            sx={{ height: 140 }}
                            title="Biciglik"
                            image="/Images/bicycle.png"
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
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                    <Card sx={{maxWidth: isMediumScreen ? '30%' : 
                 '80%', mx: 2, borderRadius: '15px' }} className="hover:scale-110 transition ease-out">
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/Images/beer1.png"
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
                </Grid>
            </div>
        </section>
        <ReviewList />
        <section className="faq-section">
            <img src="/Images/faqIcon.png" className="absolute left-14 bottom-48 -rotate-12 z-20 hover:scale-110 ease-in-out" />
            <img src="/Images/faqIcon.png" className="absolute right-10 rotate-12 z-20 hover:scale-110 ease-in-out" />
            <Container >
                <Grid sx={{ m: 2 }} rowGap={2}>
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
                src="/Images/mobilDownload.png"
            />
            <Button sx={{ zIndex: 1, position: 'absolute' }}>
                Letöltés
            </Button>

        </section>
    </div>
}
/** 
 * A `ReviewList` komponens lekéri és megjeleníti a felhasználói véleményeket.
 * A véleményeket csak akkor jeleníti meg, ha azok értékelése nagyobb mint 3.
 * A megjelenítendő vélemények számát korlátozza az első háromra.
 */
export function ReviewList() {
    const [review, setReviews] = useState<Review[] | undefined>();
    /** 
        * A `name` funkció lekéri az összes véleményt a szerverről, és beállítja a `review` állapotot.
        */
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
    // Az adatok lekérdezésére a komponens első renderelésekor kerül sor.
    useEffect(() => {
        name();
    }, [])
     // Kiszűri a véleményeket aszerint, hogy az értékelésük nagyobb-e mint 3, és csak a legelső három véleményt tartja meg.
    const filteredReviews = review?.filter(item => item.rate > 3).slice(0, 3);
     // Véletlenszerű sorrendbe rendezzük a kiválasztott véleményeket.
    const shuffledReviews = shuffleArray(filteredReviews);
    return (
        <section className="review-section">
            <Grid item spacing={12}>
                <Typography variant="h1" className="font-extrabold">
                    <img src='/Images/velemenyekLogo.png' />
                </Typography>
            </Grid>
            <Grid container spacing={2} className="mt-5">
                <Grid item xs={6} alignItems="center" container justifyContent="center" >
                    {
                        shuffledReviews && shuffledReviews.map((item, index) => {
                            return <ReviewComponent content={item.content} key={index} isMainPage={true} id={item.id} username={item.user.username} rate={item.rate} onDelete={name} />;
                        })
                    }
                </Grid>
                <Grid item xs={6}>
                    <img className="top-2/3 w-full flex items-center justify-center overflow-hidden rounded-2xl" src="/Images/peopleComment.png" alt="People commenting" />
                </Grid>
            </Grid>
        </section>
    );
}
/** 
 * A `shuffleArray` funkció véletlenszerűen átrendez egy tömb elemeit.
 * Ez biztosítja, hogy a vélemények megjelenítése változatos legyen.
 */
function shuffleArray(array: Review[] | undefined) {
    if (!array) return [];
    for (let i = array!.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array![i], array![j]] = [array![j], array![i]]; // Kicseréli az elemeket véletlenszerűen.
    }
    return array;
}
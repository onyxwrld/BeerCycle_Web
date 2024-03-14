import { Container, Grid, makeStyles } from "@mui/material";
import Drawer from "@mui/material/Drawer";

export function GalleryPage() {
    let selfi = 'selfi ';
    const selfiArray = [];
    for (let index = 1; index < 16; index++) {
        selfiArray.push(selfi + `(${index}).jpg`);
    }

    return (
        <Container >
        <Grid container justifyContent="center" spacing={4} sx={{mt:15}}>
            {selfiArray.map((selfiImage, index) => (
                <Grid item xs={6} sm={3} md={3} lg={3} key={index} >
                    <img style={{
                    margin: '4px',
                    maxWidth: '100%',
                    height: 'auto',
                    display: 'block',
                }} src={`src/Images/beerselfi/${selfiImage}`} alt={`Selfi ${index}`} />
                </Grid>
            ))}
        </Grid>
        </Container>
    )
}
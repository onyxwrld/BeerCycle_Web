import { Container } from '@mui/system';
import MySvg from '../Images/SVG/sor_loading.svg';
import { Grid } from '@mui/material';
export function LoadingPage(){

    return(
       
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <object style={{width:340}}type="image/svg+xml" data={MySvg}>svg-animation</object>;
      </Grid>
    )
}
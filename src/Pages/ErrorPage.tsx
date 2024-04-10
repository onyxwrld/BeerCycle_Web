import { Button, Typography } from '@mui/material';
import MySvg from '../Images/SVG/404.svg';
import { Link } from 'react-router-dom';
export function ErrorPage(){
    return<>
    <div className='loadDiv'>
    <Typography sx={{
       fontSize: 100
    }}>
        404
    </Typography>
    <img src='/Images/404beer.png' style={{borderRadius: '15px',height:'300px'}}/>
    <Typography sx={{
       fontSize: 25
    }}>
        Sajnos rossz helyen jársz...
    </Typography>
    <Typography sx={{
       fontSize: 20
    }}>
        Nézz körül főoldalunkon!
    </Typography>
    <Link to='/'><Button>Vissza</Button></Link>
    </div>
   
    </>
}
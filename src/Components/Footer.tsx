import React, { useState, useEffect } from 'react';

import { Grid, Typography, makeStyles } from '@mui/material';
/*
const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));*/
interface OpeningHours {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
    Sunday: string;
  }
  interface Worker{
    username: string;
    email: string;
    passowrd: string;
    first_name: string;
    last_name: string;
    role: string;
  }
  
  interface DataStructure {
    phone_number: number;
    email: string;
    opening_hours_id: number;
    location: string;
    company_id: number;
    worker: Worker;
    opening: OpeningHours;
  }
  const formatOpeningHours = (opening: OpeningHours) => {
    return(
        <div>
            <ul>
                <li>
                    {opening.Monday}
                </li>
                <li>
                    {opening.Tuesday}
                </li>
                <li>
                    {opening.Wednesday}
                </li>
                <li>
                    {opening.Tuesday}
                </li>
                <li>
                    {opening.Friday}
                </li>
                <li>
                    {opening.Saturday}
                </li>
                <li>
                    {opening.Sunday}
                </li>
            </ul>
        </div>  
    )
  };
export function Footer()
{
    const [adatok,setData] = useState([] as DataStructure[]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3000/torzs-adatok');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const jsonData = await response.json() as DataStructure[];
            //localStorage.setItem('torzs-adat',jsonData)
            setData(jsonData)
          } catch (error) {
            console.error('Error fetching data:', error);
          }

        };
        
        fetchData();
        console.log(adatok);
      }, []);
    if (!adatok[0]) {
        return <p>Loading...</p>
    }
    return(
          <footer>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" align="center" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              Phone: {adatok[0].phone_number}
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              Email: {adatok[0].email}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" align="center" gutterBottom>
              Opening Hours
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              {formatOpeningHours(adatok[0].opening)}
            </Typography>
          </Grid>
        </Grid>
        </footer>
      
    )
}
import React, { useState, useEffect } from 'react';
import { Grid, Link, Typography, makeStyles } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
      }, []);
      if(!adatok[0])
      {
        return "asd"
      }
    return(
      <footer className="bg-darkOrange text-white py-8">
  <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div>
      <img src="/Images/BeerCycleText.png" alt="" className="mx-auto mb-4" />
    </div>

    {/* Contact */}
    <div>
      <h3 className="mb-2 items-center font-bold">Contact</h3>
      <p className="mb-2">{adatok[0].email}</p>
      <p>{adatok[0].location}</p>
      <p>{adatok[0].phone_number}</p>
    </div>

    {/* Opening Time */}
    <div>
      <h3 className="mb-2 items-center">Opening</h3>
      {formatOpeningHours(adatok[0].opening)}
    </div>

    {/* Social Media Icons */}
    <div>
      <h3 className="mb-2 items-center">Social Media</h3>
      <div className="flex justify-center">
        <AccountCircleIcon className="mr-4" />
        <AccountCircleIcon className="mr-4" />
        <AccountCircleIcon className="mr-4" />
      </div>
    </div>

    {/* Copyright */}
    <div className="text-center flex justify-center items-center col-span-full">
      <Copyright/>
    </div>
  </div>
</footer>
      );
    };

    function Copyright() {
      return (
          <Typography className="text-white ">
              {'Copyright © '}
              <Link >
                  BeerCycle
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
          </Typography>
      );
  }
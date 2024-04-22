import React, { useState, useEffect } from 'react';
import { Grid, Typography, makeStyles } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

/**
 * Nyitvatartási időket tároló interfész.
 * Minden napra egy string típusú értéket tárol, ami az adott nap nyitvatartási idejét jelzi.
 */
export interface OpeningHours {
  monday: string;    // Hétfői nyitvatartási idő.
  tuesday: string;   // Keddi nyitvatartási idő.
  wednesday: string; // Szerdai nyitvatartási idő.
  thursday: string;  // Csütörtöki nyitvatartási idő.
  friday: string;    // Pénteki nyitvatartási idő.
  saturday: string;  // Szombati nyitvatartási idő.
  sunday: string;    // Vasárnapi nyitvatartási idő.
}
/**
* Adatszerkezet, ami egy cég adatait és kapcsolódó információkat tárol.
* Tartalmazza a cég telefonszámát, email címét, helyszínét és egyéb adatait.
*/
export interface DataStructure {
  phone_number: number;      // Telefonszám.
  email: string;             // E-mail cím.
  opening_hours_id: number;  // A nyitvatartási idő azonosítója.
  location: string;          // Helyszín (cím).
  opening: OpeningHours;     // A cég nyitvatartási ideje.
}

/**
 * 
 * @param opening A formatOpeningHours egy nyitvatartási időpontokat tartalmazó adatszerkezet
 * @returns 
 * 
 * A footer függvény lekéri a http://localhost:3000/torzs-adatok url-ről az adatok és ezt használja fel megjelnítéskor. Igy csak az admin tudja változatni az adatokat, és mikor erre sor kerül a frontend oldalon is változnak.
 */
  const formatOpeningHours = (opening: OpeningHours) => {
    return(
        <div className=' flex justify-center text-amber'>
            <ul>
                <li>
                    {opening.monday}
                </li>
                <li>
                    {opening.thursday}
                </li>
                <li>
                    {opening.wednesday}
                </li>
                <li>
                    {opening.tuesday}
                </li>
                <li>
                    {opening.friday}
                </li>
                <li>
                    {opening.saturday}
                </li>
                <li>
                    {opening.sunday}
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
            setData(jsonData)
          } catch (error) {
            console.error('Error fetching data:', error);
          }

        };
        
        fetchData();
      }, []);
      if(!adatok[0])
      {
        return "Betöltés"
      }
    return(
      <footer className="bg-darkOrange text-white py-8">
  <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div>
      <img src="/Images/BeerCycleText.png" alt="" className="mx-auto mb-4" />
    </div>
    <div className='items-center'> 
      <h3 className=" font-bold flex justify-center text-orange-500">Kapcsolatok</h3>
      <div className='text-amber'>
      <p className="">{adatok[0].email}</p>
      <p>{adatok[0].location}</p>
      <p>+{adatok[0].phone_number}</p>
      </div>
    </div>

    <div>
      <h3 className="flex justify-center font-bold text-orange-500">Nyitvatartás</h3>
      {formatOpeningHours(adatok[0].opening)}
    </div>

    <div>
      <h3 className="flex justify-center font-bold text-orange-500">Social Media</h3>
      <div className="flex justify-center ">
        <Link to='nincsfacebooksadsad'><FacebookIcon className='m-2 hover:scale-110 text-amber '/></Link>
        <a href='https://github.com/onyxwrld?tab=repositories' target='blank'> <GitHubIcon  className='text-amber m-2 hover:scale-110'/></a>
        <a href='mailto:ugyintezo@beercycle.com' target='blank'><EmailIcon  className='text-amber m-2 hover:scale-110'/></a>
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='blank'><YouTubeIcon  className='text-amber m-2 hover:scale-110'/></a>
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
              
                  BeerCycle
              {' '}
              {new Date().getFullYear()}
              {'.'}
          </Typography>
      );
  }
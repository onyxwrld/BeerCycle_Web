import { useEffect, useState } from 'react';
import { Button, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, Grid, Typography } from '@mui/material';
import MapComponent from '../Components/FoglaljForm/Map';
import { Step1 } from '../Components/FoglaljForm/page_1';

function ReservationForm() {
    const [step, setStep] = useState(1);
    
    const [size, setSize] = useState('');
    const [address, setAddress] = useState<string>('');

    const handleNext = () => {
        if (step < 5) {
            setStep((prevStep) => prevStep + 1);
        }
    };
    const handleBack = () => {
        if (step > 1) {
            setStep((prevStep) => prevStep - 1);
        }
    };

    return (
        <div className="bg-white h-screen flex justify-center items-center">
            <div className="bg-navYellow p-10 rounded-3xl" style={{ width: '800px', height: '800px' }}>
                <div className="flex justify-center">
                    <img src="src/Images/BeerCycleText.png" alt="BEERCYCLE Logo" className="w-3/5" />
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={3}>
                        <div className="flex flex-col items-center justify-center h-full">
                            {[...Array(5)].map((e, i) => (
                                <div key={i} className="flex flex-col items-center justify-center">
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white ${step === i + 1 ? 'bg-orange-500 transition-colors duration-300' : 'bg-white'}`}>
                                        <div className='text-lg text-black'>
                                            {i + 1}
                                        </div>
                                    </div>
                                    {i < 4 && <div className="bg-orange-500 w-1 h-10" />}
                                </div>
                            ))}
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} md={9}>
                        {step === 1 && (
                            <Step1 size={size} setSize={setSize}/>
                        )}
                        {step === 2 && (
                            <>
                                <MapComponent setAddress={setAddress} />
                                <Typography>
                                    Kattints a térképen arra a helyre ahova szeretnéd, hogy a biciglit szállitsuk neked! {address}
                                </Typography>
                            </>
                        )}
                    </Grid>
                    <Grid container justifyContent="flex-end" alignItems="flex-end">
                        {step !== 1 && (
                            <Button variant="outlined" onClick={handleBack} id="loginButton">
                                Vissza
                            </Button>
                        )}
                        <Button onClick={handleNext} id="loginButton" className='mt-10'>
                            tovább
                        </Button>
                    </Grid>
                </Grid>

            </div>
        </div>
    );
}

export default ReservationForm;

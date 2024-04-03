import { useState } from 'react';
import { Button, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, Grid, Typography } from '@mui/material';

function ReservationForm() {
    const [step, setStep] = useState(1);
    const [size, setSize] = useState('');

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
    const handleSizeChange = (event: SelectChangeEvent) => {
        setSize(event.target.value as string);
    };

    return (
        <div className="bg-white h-screen flex justify-center items-center">
            <div className="bg-gray-200 p-10 rounded-lg" style={{ width: '800px', height: '800px' }}>
                <div className="flex justify-center">
                    <img src="src/Images/BeerCycleText.png" alt="BEERCYCLE Logo" className="w-3/5" />
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={3}>
                        <div className="flex flex-col items-center justify-center h-full">
                            {[...Array(5)].map((e, i) => (
                                <div key={i} className="flex flex-col items-center justify-center">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${step === i + 1 ? 'bg-orange-500' : 'bg-gray-300'}`}>
                                        {i + 1}
                                    </div>
                                    {i < 4 && <div className="bg-orange-500 w-1 h-10" />}
                                </div>
                            ))}
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} md={9}>
                        <div className="flex justify-center mb-4">
                            <img src="src/Images/sticky2.png" alt="Sticky Image" className="w-4/6" />
                        </div>
                        {step !== 1 && (
                            <Button variant="outlined" onClick={handleBack} className="mt-4">
                                Vissza
                            </Button>
                        )}
                        {step === 1 && (
                            <>
                                <FormControl className="mb-4">
                                    <InputLabel id="size-select-label">Size</InputLabel>
                                    <Select
                                        labelId="size-select-label"
                                        id="size-select"
                                        value={size}
                                        label="Size"
                                        onChange={handleSizeChange}
                                    >
                                        <MenuItem value="small">Small</MenuItem>
                                        <MenuItem value="medium">Medium</MenuItem>
                                        <MenuItem value="large">Large</MenuItem>
                                    </Select>
                                </FormControl>
                                <Typography>
                                Válaszd ki igényeidnek megfelelő BeerCycle biciglit!
                                </Typography>
                               
                            </>
                        )}
                         
                    </Grid>
                    <Button onClick={handleNext} id="loginButton" className=''>
                                    tovább
                                </Button>
                </Grid>
            </div>
        </div>
    );
}

export default ReservationForm;

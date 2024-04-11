import { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import MapComponent from '../Components/FoglaljForm/Map';
import { Step1 } from '../Components/FoglaljForm/page_1';
import { DatePickerWithHour } from '../Components/FoglaljForm/Page_3';
import Step_4 from '../Components/FoglaljForm/Page_4';
import { useNavigate } from 'react-router-dom';
import SnackBarAlert from '../Components/SnackBar';


function ReservationForm() {
    const [step, setStep] = useState(1);
    const token = localStorage.getItem('token');
    const basketId = localStorage.getItem('basketId');
    const navigate = useNavigate();
    const [size, setSize] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [address, setAddress] = useState<string>('');
    const [enumHour, setEnumHour] = useState<string>('');
    const userId = localStorage.getItem('ID');

    const [open, setOpen] = useState(false);

    const handelOpen = () => {
        setOpen(true)
    }
    const handleNext = () => {
        if (step < 5) {
            setStep((prevStep) => prevStep + 1);
        } else if (step === 5) {
            try {
                ReservationPost();
                return <SnackBarAlert alertMessage="sikeres" error={false} open={open} setOpen={setOpen} />       
            }
            catch {
                return <SnackBarAlert alertMessage="hibás" error={true} open={open} setOpen={setOpen} />
            }
            finally{
                handelOpen();
            }
        }
    };
    const handleBack = () => {
        if (step > 1) {
            setStep((prevStep) => prevStep - 1);
        }
    };


    const fetchData = async () => {
        if (token) {
            try {
                const response = await fetch('http://localhost:3000/basket', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                if (data.length > 0) {
                    localStorage.setItem('basketId', data[0].id.toString());
                }
                else {
                    localStorage.setItem('basketId', '');
                }
            } catch (error) {
                console.error('Error fetching basket data:', error);
            }
        } else {
            console.error('Error fetching basket data:');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    const ReservationPost = async () => {
        if (userId == null) {
            console.log("Üres a UserId");
            navigate('/login');
            return
        }
        if (basketId == null) {
            console.log("üres a basketId");
            navigate('/login');
            return
        }
        const reservation = {
            user_id: parseInt(userId),
            bicycle_id: parseInt(size),
            start_time: startDate,
            reservation_time: enumHour,
            location: address,
            basket_id: parseInt(basketId)
        };

        try {
            const response = await fetch('http://localhost:3000/reservation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(reservation),
            });

            if (response.ok) {
                setSize('');
                setAddress('');
                setEnumHour('');
                navigate('/');
                
               return <SnackBarAlert alertMessage="sikeres" error={false} open={open} setOpen={setOpen} />     
            }
            else{
                console.log('asd');
                return <SnackBarAlert alertMessage="sikertelen" error={true} open={open} setOpen={setOpen} />     
            }


        } catch (error) {
            console.error('Error making reservation:', error);
        }
    };
    return (
        <div className="bg-white h-screen flex justify-center items-center">
            <div className="bg-navYellow p-10 rounded-3xl" style={{ width: '800px', height: '800px' }}>
                <div className="flex justify-center">
                    <img src="/Images/BeerCycleText.png" alt="BEERCYCLE Logo" className="w-3/5" />
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
                            <Step1 size={size} setSize={setSize} />
                        )}
                        {step === 2 && (
                            <>
                                <MapComponent setAddress={setAddress} />
                                <Typography>
                                    Kattints a térképen arra a helyre ahova szeretnéd, hogy a biciglit szállitsuk neked! {address}
                                </Typography>
                            </>
                        )}
                        {step === 3 && (
                            <><Typography>
                                Válasszd ki a neked megfelelő időpontot!
                            </Typography>
                                <DatePickerWithHour startDate={startDate} setStartDate={setStartDate} setEnumHour={setEnumHour} enumHour={enumHour} />
                            </>
                        )}
                        {step === 4 && (
                            <>
                                <Step_4 />
                            </>
                        )}
                    </Grid>
                    <Grid container justifyContent="flex-end" alignItems="flex-end">
                        {step !== 1 && (
                            <Button variant="outlined" onClick={handleBack} id="loginButton">
                                Vissza
                            </Button>
                        )}
                        {step !== 5 && (
                            <Button onClick={handleNext} id="loginButton" className='mt-10'>
                                tovább
                            </Button>
                        )}
                        {
                            step === 5 && (
                                <Button onClick={handleNext} id="loginButton" className='mt-10'>
                                    Véglegesités
                                </Button>
                            )
                        }

                    </Grid>
                </Grid>

            </div>
        </div>
    );
}

export default ReservationForm;

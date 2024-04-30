import { useContext, useEffect, useState } from 'react';
import { Button, Divider, Grid, Typography } from '@mui/material';
import MapComponent from '../Components/FoglaljForm/Map';
import { Step1 } from '../Components/FoglaljForm/page_1';
import { DatePickerWithHour } from '../Components/FoglaljForm/Page_3';
import Step_4 from '../Components/FoglaljForm/Page_4';
import { useNavigate } from 'react-router-dom';
import SnackBarAlert from '../Components/SnackBar';
import { ApiContext } from '../Components/Auth/ApiProvider';
import { MenuContext } from '../Components/Auth/MenuProvider';
import { format } from 'date-fns';
import { Basket } from '../Interfaces/Basket';
import { Bicycle } from '../Interfaces/Reservation';

/**
 * A reservationForm a foglalás leadására szólgál, több komponens is megjelnik benne. A fő lényege hogy a kiválaszott adatokat postolja az adatbázisban.
 */
function ReservationForm() {
    const [step, setStep] = useState(1);
    const token = localStorage.getItem('token');
    const basketId = localStorage.getItem('basketId');
    const navigate = useNavigate();
    const [size, setSize] = useState('');
    const [bicycle, setBicycle] = useState<Bicycle[]>([]);
    const [startDate, setStartDate] = useState(new Date());
    let total = 0;
    const [basket, setBasketData] = useState<Basket[]>([])
    const [address, setAddress] = useState<string>('');
    const [enumHour, setEnumHour] = useState<string>('');
    const userId = localStorage.getItem('ID');
    const api = useContext(ApiContext);
    const menuApi = useContext(MenuContext);
    const [open, setOpen] = useState(false);

    const handelOpen = () => {
        setOpen(true)
    }
    const handleNext = () => {
        if (step < 5) {
            if(step === 1){
                console.log(basketId)    
                if(basketId === null || basketId === undefined){
                    const menu: Menu = {
                        id: 11,
                        name: "Mizse Szénsavmentes",
                        price: 0,
                        type: "Drink"
                    }
                    
                    menuApi.basketFeltolt(menu)
                    console.log(basketId)
                }
            } 
            setStep((prevStep) => prevStep + 1);
        }
        
        else if (step === 5) {
            try {
                console.log(basketId)
                ReservationPost();
                return <SnackBarAlert alertMessage="sikeres" error={false} open={open} setOpen={setOpen} />
            }
            catch {
                return <SnackBarAlert alertMessage="hibás" error={true} open={open} setOpen={setOpen} />
            }
            finally {
                handelOpen();
            }
        }
    };
    const handleBack = () => {
        if (step > 1) {
            setStep((prevStep) => prevStep - 1);
        }
    };

    const vegOsszegSzamolas = (data: Basket[]) => {
        try {
            for (let index = 0; index < data.length; index++) {
                total += data[index].menu[index].price;
            }
            size === '1' ? total += bicycle[0].price :
                size === '2' ? total += bicycle[1].price :
                    total += bicycle[2].price
            return total
        }

        catch {
            size === '1' ? total += bicycle[0].price :
                size === '2' ? total += bicycle[1].price :
                    total += bicycle[2].price
            return total
        }

    }
    const fetchData = async () => {
        if (token) {
            try {
                const response = await fetch('http://localhost:3000/basket', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                const data = await response.json() as Basket[];
                if (data.length > 0) {
                    setBasketData(data);
                }

            } catch (error) {
                console.error('Error fetching basket data:', error);
            }
        } else {
            console.error('Error fetching basket data:');
        }
    };

    const fetchBike = async () => {
        const response = await fetch('http://localhost:3000/bicycle', {
            method: 'GET',
        });
        const data = await response.json() as Bicycle[];
        if (data.length > 0) {
            setBicycle(data)
        }
    }

    useEffect(() => {
        fetchData();
        fetchBike();
    }, []);

    const ReservationPost = async () => {
        if (userId == null) {
            console.log("Üres a UserId");
            navigate('/login');
            return
        }
        if (basketId == null) {
         
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
                api.snackBarFunction('Sikeres foglalás', false)
                localStorage.removeItem('basketId')
                setSize('');
                setAddress('');
                setEnumHour('');
                navigate('/');

            }
            else {
                api.snackBarFunction('Sikertelen foglalás', true)
            }


        } catch (error) {
            console.error('Error making reservation:', error);
        }
    };
    return (
        <div className="bg-white flex justify-center items-center">
            <div className="bg-navYellow p-3 rounded-3xl" style={{ width: '800px', margin: '20px' }}>
                <div className="flex justify-center">
                    <img src="/Images/BeerCycleText.png" alt="BEERCYCLE Logo" className="w-3/5" />
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={3} spacing={6}>
                        <div className="flex flex-col items-center justify-center h-full">
                            {[...Array(5)].map((e, i) => (
                                <div key={i} className="flex flex-col items-center justify-center">
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white ${step === i + 1 ? 'bg-orange-500 transition-colors duration-300' : 'border-4 border-orange-500'}`}>
                                        <div className='text-lg text-black'>
                                            {i + 1}
                                        </div>
                                    </div>
                                    {i < 4 && <div className="bg-orange-500 w-2 h-10" />}
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
                                <Grid container spacing={2} sx={{ mt: 0 }}>
                                    <Grid item spacing={6}>
                                        <Typography>
                                            Kattints a térképen arra a helyre ahova szeretnéd, hogy a biciglit szállitsuk neked!

                                        </Typography>
                                        <Typography>
                                            {address}
                                        </Typography>
                                    </Grid>

                                </Grid>
                            </>
                        )}
                        {step === 3 && (
                            <>
                                <Grid className='items-center justify-center'>
                                    <img src='/Images/beerCalendar.png' className='w-3/5' />
                                </Grid>
                                <Grid>
                                    <DatePickerWithHour startDate={startDate} setStartDate={setStartDate} setEnumHour={setEnumHour} enumHour={enumHour} />
                                    <Typography>
                                        Vegye figylembe, hogy lemondás a válaszott nap előtt 24 órával lehetséges csak, ha nem teszi ezt meg már nem élhet a vissza mondással!
                                    </Typography>
                                </Grid>
                            </>
                        )}
                        {step === 4 && (
                            <>
                                <Step_4 />
                            </>
                        )}
                        {step === 5 && (
                            <>
                                <Grid container className="bg-white rounded-xl mt-10" spacing={2}>
                                    <Grid item xs={6} container direction="column" >
                                        <Typography>
                                            Foglalási idő:
                                        </Typography>
                                        <Typography>
                                            Szállítási cím:
                                        </Typography>
                                        <Typography >
                                            Bicikli mérete:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} container direction="column" alignItems="flex-start">
                                        <Typography variant="h6">
                                            {enumHour === 'Five' ? '5 óra' : enumHour === 'Three' ? '3 óra' : '1 óra'}
                                        </Typography>
                                        <Typography variant="h6">
                                            {address}
                                        </Typography>
                                        <Typography variant="h6">
                                            {size === '1' ? 'Kicsi' : size === '2' ? 'Közepes' : 'Nagy'}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography variant="h6">
                                            Végösszeg:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="h6">
                                            {vegOsszegSzamolas(basket).toLocaleString('hu-HU')} Ft
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </>
                        )}
                    </Grid>
                    <Grid container justifyContent="flex-end" alignItems="flex-end">
                        {step !== 1 && (
                            <Button onClick={handleBack} id='backButton'>
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

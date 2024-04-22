import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { DataStructure, OpeningHours } from '../Footer';

interface Step3Props {
    enumHour: string;
    startDate: Date;
    setEnumHour: (hour: string) => void;
    setStartDate: (date: Date) => void;
}

export const DatePickerWithHour: React.FC<Step3Props> = ({ startDate, setStartDate, setEnumHour, enumHour }) => {

    const handleChange = (date: Date | null) => {
        if (date) {
            setStartDate(date);
        }
    };

    const handleDateChange = (event: SelectChangeEvent) => {
        setEnumHour(event.target.value as string);
    };
    const [adatok, setData] = useState([] as DataStructure[]);
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
    useEffect(() => {
        fetchData();
    }, []);

    const getHoursForDay = (date: Date, day: string) => {
        if (!adatok.length) return [];
    
        const hours = adatok[0].opening[day.toLowerCase() as keyof OpeningHours];
        if (hours === "Closed") return [];
    
        const [open, close] = hours.split("-").map(part => part.trim());
        const [openHour, openMinutes] = open.split(":").map(part => parseInt(part.trim(), 10));
        const [closeHour, closeMinutes] = close.split(":").map(part => parseInt(part.trim(), 10));
    
        const openDate = new Date(date.getTime());
        openDate.setHours(openHour, openMinutes, 0, 0);
    
        const closeDate = new Date(date.getTime());
        closeDate.setHours(closeHour, closeMinutes, 0, 0);
    
        return [openDate, closeDate];
    };

    const filterTime = (time: Date) => {
    const dayOfWeek = startDate.toLocaleString('en-us', { weekday: 'long' }).toLowerCase();
    const timeRanges = getHoursForDay(time, dayOfWeek);
    if (!timeRanges.length) {
        return false; 
    }
    const [openTime, closeTime] = timeRanges;

    return time.getTime() >= openTime.getTime() && time.getTime() <= closeTime.getTime();
    };

    return (
        <><Grid className='mt-2'>
            <DatePicker
                selected={startDate}
                onChange={handleChange}
                showTimeSelect
                filterTime={filterTime}
                dateFormat="Pp"
            />
            <FormControl className="mb-4">
                <InputLabel id="hour-select-label">Hour</InputLabel>
                <Select
                    labelId="hour-select-label"
                    id="hour-select"
                    value={enumHour}
                    label="Hour"
                    onChange={handleDateChange}
                    required
                >
                    <MenuItem value="One">One</MenuItem>
                    <MenuItem value="Three">Three</MenuItem>
                    <MenuItem value="Five">Five</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        </>
    );
};
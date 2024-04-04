import React from 'react';
import  DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css'; 
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'; 

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

    return (
        <>
            <DatePicker
                selected={startDate}
                onChange={handleChange}
                showTimeSelect
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
                >
                    <MenuItem value="One">One</MenuItem>
                    <MenuItem value="Three">Three</MenuItem>
                    <MenuItem value="Five">Five</MenuItem>
                </Select>
            </FormControl>
        </>
    );
};
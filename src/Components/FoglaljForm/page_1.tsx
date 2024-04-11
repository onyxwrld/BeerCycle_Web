import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";

interface Step1Props {
    size: string;
    setSize: (size: string) => void;
}

export const Step1: React.FC<Step1Props> = ({size,setSize}) => {

    const handleSizeChange = (event: SelectChangeEvent) => {
        setSize(event.target.value as string);
    };
    return ( <>
        <div className="flex justify-start mb-4">
        <img src={
              size === '1' ? '/Images/small.png' :
              size=== '2' ? '/Images/mediumBike.png' :
                  '/Images/largeBike.png'
            } className="w-4/6 rounded-xl" />
        </div>
        <FormControl className="mb-4 ">
            <InputLabel id="size-select-label">Size</InputLabel>
            <Select
                labelId="size-select-label"
                id="size-select"
                value={size}
                label="Size"
                onChange={handleSizeChange}
            >
                <MenuItem value="1">Kicsi</MenuItem>
                <MenuItem value="2">Közepes</MenuItem>
                <MenuItem value="3">Nagy</MenuItem>
            </Select>
        </FormControl>
        <Typography>
            Válaszd ki igényeidnek megfelelő BeerCycle biciglit!
        </Typography>
    
    </> );
}
 
export default Step1;
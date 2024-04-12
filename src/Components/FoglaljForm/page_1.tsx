import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";

interface Step1Props {
    size: string;
    setSize: (size: string) => void;
}

export const Step1: React.FC<Step1Props> = ({ size, setSize }) => {

    const handleSizeChange = (event: SelectChangeEvent) => {
        setSize(event.target.value as string);
    };
    return (<>
        <Grid container spacing={2}>
            <Grid item spacing={12} className="justify-center flex ">
                <img src={
                    size === '1' ? '/Images/small.png' :
                        size === '2' ? '/Images/mediumBike.png' :
                            '/Images/largeBike.png'
                } className="w-96 rounded-xl" />
            </Grid>
            <Grid item spacing={6}>
                <FormControl className="mb-4 ">
                    <InputLabel id="size-select-label">Model</InputLabel>
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
            </Grid>
            <Grid item spacing={6}>
            <Typography>
                    Válaszd ki igényeidnek megfelelő BeerCycle biciglit!
                </Typography>
                {
                    size === '1' ?  <Typography> A bicikli méret kapacitása 6 fő (5 utas + 1 sofőr) </Typography>:
                    size === '2' ?  <Typography> A bicikli méret kapacitása 8 fő (7 utas + 1 sofőr) </Typography>:
                    <Typography>A bicikli méret kapacitása 12 fő (11 utas + 1 sofőr)</Typography>
                }
            </Grid>
        </Grid>
    </>);
}

export default Step1;
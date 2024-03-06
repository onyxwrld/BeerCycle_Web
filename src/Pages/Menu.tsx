import { Padding } from "@mui/icons-material";
import { Box, Button, Container, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

interface Menu {
    name: string;
    type: string;
    price: number;
}

export default function Menu() {
    const [food, setFood] = useState([] as Menu[]);
    const [types, setType] = useState<string[]>([]);

    useEffect(() => {
        async function LoadData() {
            const response = await fetch('http://localhost:3000/menu');
            if (response.ok) {
                const data = await response.json() as Menu[];
                setFood(data);
            }
            else {
                const errorOsbj = await response.json();

            }
        }
        LoadData();
        const uniqueTypes = Array.from(new Set(food.map(item => item.type)));
        setType(uniqueTypes);
    }, [])

    const handleChange = (event: SelectChangeEvent<typeof types>) => {
        const {
            target: { value },
        } = event;
        setType(
            typeof value === 'string' ? value.split(',') : value,
        );
    }

    return (
        <>
            <FormControl sx={{ mt: 15, width: "10vw" }}>
                <InputLabel id="demo-simple-select-label">Kategória</InputLabel>
                <Select
                    labelId="lable"
                    id="asd"
                    value={types}
                    onChange={handleChange}
                >
                    {types.map((type, index) => (
                        <MenuItem
                            key={index}
                            value={type}
                        >
                            {type}
                        </MenuItem>

                    ))}
                </Select>
            </FormControl>

            <Container fixed sx={{ mt: 15 }}>
                <Grid container spacing={{ xs: 3, md: 4 }}>
                    
                    {
                        food.map((x, index) => (
                            <Box sx={{
                                borderRadius: 2,
                                boxShadow: 3,
                                p: 2,
                                m: 2,
                                height: "8em",
                                width: "8em"
                            }} flexGrow={1}>
                                <Grid >
                                    <Grid>
                                        <Typography sx={{ fontStyle: 'oblique',top:0, left:0 }}>
                                            {
                                                x.name
                                            }
                                        </Typography>
                                        {
                                            x.price + ' Ft'
                                        }
                                        <IconButton>
                                            <ShoppingBagIcon></ShoppingBagIcon>
                                        </IconButton>

                                    </Grid>
                                </Grid>
                            </Box>
                        ))
                    }
                </Grid>
            </Container>
        </>
    )
}

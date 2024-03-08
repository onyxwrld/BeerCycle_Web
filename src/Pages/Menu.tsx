
import { useEffect, useState } from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

interface Menu {
    name: string;
    type: string;
    price: number;
}



export default function Menu() {
    const [food, setFood] = useState([] as Menu[]);
    const [types, setType] = useState<string[]>([]);
    const [selectedFoods, setSelectedFoods] = useState<Menu[]>([]);
    const handleChange = (event: SelectChangeEvent<typeof types>) => {
        const {
            target: { value },
        } = event;
        setType(
            typeof value === 'string' ? value.split(',') : value,
        );
    }

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
       
    }, [])
    useEffect(() => {
        if (types.length > 0) {
            const filteredFoods = food.filter(item => types.includes(item.type));
            setSelectedFoods(filteredFoods);
        } else {
            setSelectedFoods(food);
        }
        const uniqueTypes = Array.from(new Set(food.map(item => item.type)));
        setType(uniqueTypes);
    }, [types])

    return (
        <>
            <Container fixed sx={{ mt: 15,mb:100 }}>
                <Grid container spacing={{sx:3}}>
                    <Grid item xs={6}>
                    <FormControl sx={{ width: "10vw" }}>
                        <InputLabel id="demo-simple-select-label">Kategória</InputLabel>
                        <Select
                            labelId="lable"
                            id="asd"
                            value={types}
                            onChange={handleChange}
                        >
                            
                            {
                                
                            types.map((type, index) => (
                                <MenuItem
                                    key={index}
                                    value={type}
                                >
                                    {type}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
              </Grid>
              <Grid item xs={6}>
                    <Typography>
                        Válasszon sokszín kinálatunkból igényeinek megfelelően! Majd kattintson a termék csomag ikonjára, hogy terméke a kosárba kerülhessen.
                    </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={{ xs: 3, md: 4 }} >

                    {
                        selectedFoods.map((x, index) => (
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
                                        <Typography sx={{ fontStyle: 'oblique', top: 0, left: 0 }}>
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

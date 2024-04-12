
import { useContext, useEffect, useState } from "react";
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
import { MenuContext } from "../Components/Auth/MenuProvider";
import { Card, CardMedia } from "@mui/material";


export default function Menu() {
    const [food, setFood] = useState([] as Menu[]);
    const [types, setType] = useState<string[]>([]);
    const [selectedFoods, setSelectedFoods] = useState<Menu[]>([]);
    const api = useContext(MenuContext);

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
            try {
                const response = await fetch('http://localhost:3000/menu');
                const data = await response.json() as Menu[];
                setFood(data);
            }
            catch {
                console.log("error")
            }

        }
        LoadData();
    }, [])

    return (
        <section id="menuPage">
            <Container>
                <Grid container spacing={2} className="m-10">
                    <Grid item xs={6}>
                        <Typography className="bg-white rounded-xl">
                            Válasszon sokszín kinálatunkból igényeinek megfelelően! Majd kattintson a termék csomag ikonjára, hogy terméke a kosárba kerülhessen.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={{ xs: 3, md: 4 }} >
                    {
                        food.map((x, index) => (
                            <Card key={index} className="m-5 p-5 hover:scale-110 transition ease-in-out"
                                sx={{
                                    borderRadius: '15px',
                                }}>
                                <CardMedia
                                    component="img"
                                    alt="drink"
                                    image={`/Images/sorKepek/${x.name}.png`}
                                    sx={{
                                        height: '150px',
                                        borderRadius: '15px'
                                    }}
                                >
                                </CardMedia>
                                <Grid item spacing={12}>
                                        <Typography sx={{fontWeight:'300px',mt:2 }}>
                                            {
                                                x.name
                                            }
                                        </Typography>
                                    </Grid>
                                <Grid container spacing={2}>
                                    <Grid item spacing={6}>
                                        {
                                            x.price.toLocaleString('hu-HU') + ' Ft'
                                        }
                                    </Grid>
                                    <Grid  item spacing={6}>
                                        <IconButton onClick={() => api.basketFeltolt(x)} className="hover:text-orange-500 "> 
                                            <ShoppingBagIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Card>
                        ))
                    }
                </Grid>
            </Container>
        </section >
    )
}

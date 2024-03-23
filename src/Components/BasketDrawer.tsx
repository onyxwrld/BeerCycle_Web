import { Box, Drawer, List, ListItem, Typography, ListItemButton, ListItemText, Snackbar, Button, IconButton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MenuContext } from "./Auth/MenuProvider";
import CloseIcon from '@mui/icons-material/Close';
import { DialogComp } from "./DialogComp";
import { FunctionsOutlined } from "@mui/icons-material";
import { Basket } from "../Interfaces/Basket";

export default function DrawerSide({ isOpen, onClose }:
    { isOpen: boolean, onClose: () => void }) {
    const [basketData, setBasketData] = useState<Basket[]>([]);
    const token = localStorage.getItem('token');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/basket', {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                    }
                })
                const data = await response.json() as Basket[];
                setBasketData(data);
            } catch (error) {
                console.error('Hiba a kosár adatok lekérése közben:', error);
            }
        };

        fetchData();
        console.log(basketData)
    }, []);

    function onDelete(id: number) {
        /*for (let index = 0; index < menu.length; index++) {
           if(menu[index].id== id){
            menu.splice(index,1);
           }
        }
        localStorage.setItem('menu',JSON.stringify(menu));
        localStorage.setItem('basketCount',JSON.stringify(menu.length));
                basketChange(true);
*/

    }
    return (
        <>
            <Drawer anchor="right" open={isOpen} onClose={onClose} >
                <Box p={2}>
                    <Typography>
                        Kosarad
                    </Typography>
                    <List>
                        {basketData.length > 0
                            ?
                            basketData.map((basket: Basket, index:number) => (
                                <ListItem key={index}>
                                    <ListItemButton>
                                        <ListItemText>
                                            {basket.menu.name}
                                        </ListItemText>
                                    </ListItemButton>
                                    <IconButton onClick={() => onDelete(basket.menu.id)} >
                                        <CloseIcon />
                                    </IconButton>
                                </ListItem>

                            ))
                            :
                            <Typography>
                                Kosarad még üres, vegyél fel az étlapról
                            </Typography>
                        }

                    </List>

                </Box>
            </Drawer>
        </>
    )
}
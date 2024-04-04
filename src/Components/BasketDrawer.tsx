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
    let basketId = 0;
    const token = localStorage.getItem('token');
    useEffect(() => {
        const fetchData = async () => {
            if(token !=null){
                try {
                    const response = await fetch('http://localhost:3000/basket', {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        }
                    })
                    const data = await response.json();
                    setBasketData(data);
                } catch (error) {
                    console.error('Hiba a kosár adatok lekérése közben:', error);
                }
                
            }
          else{
            setBasketData([]);
          }
        };

        fetchData();
    }, [basketData]);

    async function onDelete(id: number) {
        basketId = basketData[0].id
        try {
            const response = await fetch(`http://localhost:3000/basket/${basketId}/removeitems`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    menu: id 
                  })
            })
            const data = await response.json();
            setBasketData(data);
        } catch (error) {
            console.error('Hiba a kosár adatok lekérése közben:', error);
        }
    }
    return (
        <>
            <Drawer anchor="right" open={isOpen} onClose={onClose} >
                <Box p={2}>
                    <Typography>
                        Kosarad
                    </Typography>
                    <List>
                        {basketData.length > 0 ? (
                            basketData.map((basket: Basket, index: number) => (
                                <div key={index}>
                                    {basket.menu.length > 0 ? (
                                        basket.menu.map((menuItem: Menu, menuIndex: number) => (
                                            <ListItem key={menuIndex}>
                                                <ListItemButton>
                                                    <ListItemText>
                                                        {menuItem.name}
                                                    </ListItemText>
                                                </ListItemButton>
                                                <IconButton onClick={() => onDelete(menuItem.id)}>
                                                    <CloseIcon />
                                                </IconButton>
                                            </ListItem>
                                        ))
                                    ) : (
                                        <Typography variant="body2">
                                            Kosarad tartalma üres.
                                        </Typography>
                                    )}
                                </div>
                            ))
                        ) : (
                            <Typography>
                                Kosarad még üres, vegyél fel az étlapról
                            </Typography>
                        )}

                    </List>

                </Box>
            </Drawer>
        </>
    )
}
import { Box, Drawer, List, ListItem, Typography, ListItemButton, ListItemText, Snackbar, Button, IconButton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MenuContext } from "./Auth/MenuProvider";
import CloseIcon from '@mui/icons-material/Close';
import { DialogComp } from "./DialogComp";
import { FunctionsOutlined } from "@mui/icons-material";

export default function DrawerSide({ isOpen, onClose }:
    { isOpen: boolean, onClose: () => void }) {
    const { menuListaKiir,basketChange } = useContext(MenuContext);
    var menu = menuListaKiir();

    function onDelete(id:number){
        for (let index = 0; index < menu.length; index++) {
           if(menu[index].id== id){
            menu.splice(index,1);
           }
        }
        localStorage.setItem('menu',JSON.stringify(menu));
        localStorage.setItem('basketCount',JSON.stringify(menu.length));
        basketChange(true);

    }
    return (
        <>
            <Drawer anchor="right" open={isOpen} onClose={onClose} >
                <Box p={2}>
                    <Typography>
                        Kosarad
                    </Typography>
                    <List>
                        {menu.length > 0
                         ? 
                         menu.map((menuItem: Menu, index: number) => (
                            <ListItem key={index}>
                                <ListItemButton>
                                    <ListItemText>
                                        {menuItem.name}
                                    </ListItemText>
                                </ListItemButton>
                                <IconButton onClick={()=>onDelete(menuItem.id)} >
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
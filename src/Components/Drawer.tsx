import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useContext, useEffect, useState } from "react";
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { ApiContext } from "./Auth/ApiProvider";


export default function DrawerSide({isOpen, onClose}:  
    {isOpen: boolean, onClose: ()=>void})
{
    const api = useContext(ApiContext);
    return(
        <>
        <Drawer anchor="right" open={isOpen} onClose={onClose} >
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText>
                            Profilom
                        </ListItemText>
                        </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <HistoryIcon/>
                        </ListItemIcon>
                        <ListItemText>
                            Előzmények
                        </ListItemText>
                        </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={api.logout}>
                        <ListItemIcon>
                            <LogoutIcon/>
                        </ListItemIcon>
                        <ListItemText>
                            Kijelentkezés
                        </ListItemText>
                        </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
        </>
    )
}
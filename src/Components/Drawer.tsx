import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useContext, useEffect, useState } from "react";
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { ApiContext } from "./Auth/ApiProvider";
import { Link } from "react-router-dom";


export default function DrawerSide({isOpen, onClose}:  
    {isOpen: boolean, onClose: ()=>void})
{
    const api = useContext(ApiContext);
    const logout = () => {
        api.snackBarFunction('Sikeres kijelentkezés!',false)
        api.logout();
        
    }
    return(
        <>
        <Drawer anchor="right" open={isOpen} onClose={onClose} >
            <List>
                <ListItem>
                    <Link to='/profile'>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText>
                            Profilom
                        </ListItemText>
                        </ListItemButton>
                        </Link>
                </ListItem>
                <ListItem>
                    <Link to='/profile/history'>
                    <ListItemButton>
                        <ListItemIcon>
                            <HistoryIcon/>
                        </ListItemIcon>
                        <ListItemText>
                            Előzmények
                        </ListItemText>
                        </ListItemButton>
                        </Link>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={logout}>
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
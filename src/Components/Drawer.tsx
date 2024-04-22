import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useContext, useEffect, useState } from "react";
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { ApiContext } from "./Auth/ApiProvider";
import { Link } from "react-router-dom";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

export default function DrawerSide({isOpen, onClose}:  
    {isOpen: boolean, onClose: ()=>void})
{
    const api = useContext(ApiContext);
    const logout = () => {
        api.snackBarFunction('Sikeres kijelentkezés!',false)
        api.logout();      
    }
    return (
        <>
        <Drawer anchor="right" open={isOpen} onClose={onClose} >
            <div className="flex flex-col h-full"> {/* Make it a flex container with full height */}
                <List>
                    <ListItem>
                        <Link to='/profile'>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircleIcon className="text-bloodRed"/>
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
                                <HistoryIcon className="text-orange-500"/>
                            </ListItemIcon>
                            <ListItemText>
                                Előzmények
                            </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/profile/my_reviews'>
                        <ListItemButton>
                            <ListItemIcon>
                                <ChatBubbleIcon className="text-yellow-500"/>
                            </ListItemIcon>
                            <ListItemText>
                                Vélemények
                            </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
                <div className="mt-auto"> {/* This pushes the logout item to the bottom */}
                    <List>
                        <ListItem>
                            <ListItemButton onClick={logout}>
                                <ListItemIcon>
                                    <LogoutIcon className="text-red-500"/>
                                </ListItemIcon>
                                <ListItemText>
                                    Kijelentkezés
                                </ListItemText>
                                </ListItemButton>
                        </ListItem>
                    </List>
                </div>
            </div>
        </Drawer>
        </>
    )
    
}
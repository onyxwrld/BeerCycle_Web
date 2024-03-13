import { Box, Drawer, List, Typography } from "@mui/material";
import { useContext } from "react";
import { MenuContext } from "./Auth/MenuProvider";

export default function DrawerSide({ isOpen, onClose }:
    { isOpen: boolean, onClose: () => void }) {
    const {menuListaKiir } = useContext(MenuContext);
    return (
        <>
            <Drawer anchor="right" open={isOpen} onClose={onClose} >
                <Box p={2}>
                    <Typography>
                        Basket
                    </Typography>
                    <List>
                    
                    </List>
                </Box>
            </Drawer>
        </>
    )
}
import { Box, Drawer, Typography } from "@mui/material";

export default function DrawerSide({isOpen, onClose}:  
    {isOpen: boolean, onClose: ()=>void})
{
    return(
        <>
        <Drawer anchor="right" open={isOpen} onClose={onClose} >
            <Box p={2}>
                <Typography>
                   Basket
                </Typography>
            </Box>
        </Drawer>
        </>
    )
}
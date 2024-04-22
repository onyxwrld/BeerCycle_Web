import { Box, Grid, IconButton, Rating, Typography } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DialogComp } from "./DialogComp";
import { useState } from "react";

/**
 * ReviewComponent props interface.
 * 
 * @param rate A felhasználó által adott értékelés, értékként 1-től 5-ig.
 * @param content A felhasználó által írt értékelés szövege.
 * @param username A felhasználó neve, aki az értékelést írta.
 * @param id Az értékelés egyedi azonosítója.
 * @param isMainPage Meghatározza, hogy a főoldalon jelenik-e meg az értékelés.
 * @param onDelete A törlési művelet callback függvénye, amit a törlés gomb aktivál.
 */
export function ReviewComponent({ rate, content, username, id, isMainPage, onDelete }: { rate: number, content: string, username: string, id: number, isMainPage: boolean, onDelete: () => void }) {
    const [open, setOpen] = useState(false);  // Dialógus ablak állapotának kezelése.

    const handleClose = () => {  // Dialógus ablak bezárását kezelő függvény.
        setOpen(false);
    };

    return <>
        <DialogComp open={open} id={id} onClose={handleClose} onDelete={onDelete} />

        <Box
            minHeight={100}
            width={200}
            sx={{
                backgroundColor: 'white',
                boxShadow: 2,
                borderRadius: 3,
                m: 2
            }}
            className="hover:scale-110 transition ease-out z-10"
        >
            <Grid height="100%" item spacing={3}>
                <Grid item>
                    <Typography>
                        {username}  
                    </Typography>
                </Grid>
                <Grid container alignItems={"center"}>
                    <Grid item sx={{ flexGrow: 1 }}>
                        <Rating value={rate} readOnly sx={{ p: 0 }} />  
                    </Grid>
                    
                    {
                        (!isMainPage)  // Ha nem a főoldalon van, megjeleníti a törlés ikont.
                            ? <Grid item>
                                <IconButton onClick={() => setOpen(true)}>
                                <DeleteOutlineIcon />
                                </IconButton>
                            </Grid>
                            : null
                    }
                </Grid>
                <Grid item>
                    <Typography> 
                        {content}  
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    </>;
}

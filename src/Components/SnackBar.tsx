import { IconButton, Snackbar, SnackbarContent } from '@mui/material';
import React, { useState } from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

/**
 * Interface a SnackBarAlert komponens props-jainak definíciójához.
 */
interface SnackBarAlertProps {
    alertMessage: string;  // Az alert üzenet szövege.
    error: boolean;        // Meghatározza, hogy az alert hibaüzenet-e.
    open: boolean;         // A snackbar láthatóságát szabályozza.
    setOpen: (open: boolean) => void;  // Funkció a snackbar állapotának változtatására.
}
/**
 * SnackBarAlert komponens, ami egy Snackbar-t jelenít meg, amely lehet hiba vagy siker üzenet.
 * 
 * Props:
 * - `alertMessage`: A megjelenítendő szöveges üzenet.
 * - `error`: Logikai érték, amely meghatározza, hogy az üzenet hiba jellegű-e.
 * - `open`: Logikai érték, ami a Snackbar megjelenítését szabályozza.
 * - `setOpen`: Funkció az `open` állapotának módosítására.
 * 
 * A komponens a `Snackbar` és `SnackbarContent` elemeket használja a Material-UI könyvtárból.
 * Hiba esetén az `ErrorIcon`-t, siker esetén a `CheckCircleOutlineIcon`-t jeleníti meg, hozzá tartozó szinnel.
 */
const SnackBarAlert: React.FC<SnackBarAlertProps> = ({ alertMessage, error, open, setOpen }) => {
    
    const HandleClose = () => {
         setOpen(!open);
    };
    
    return (
        <Snackbar
            open={open}
            onClose={HandleClose}
            autoHideDuration={6000}
        >
            <SnackbarContent
                message={
                    <span className={error ? "text-red-600" : "text-green-600"} style={{ display: 'flex', alignItems: 'center' }}>
                    {error ? <ErrorIcon style={{ marginRight: '10px' }} /> : <CheckCircleOutlineIcon style={{ marginRight: '10px' }} />}
                    {alertMessage}
                  </span>
                }
                action={[
                    <IconButton key="close" aria-label="close" color="inherit" onClick={HandleClose}>
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        </Snackbar>
    );
};

export default SnackBarAlert;

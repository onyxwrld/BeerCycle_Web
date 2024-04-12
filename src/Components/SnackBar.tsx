import { IconButton, Snackbar, SnackbarContent } from '@mui/material';
import React, { useState } from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

interface SnackBarAlertProps {
    alertMessage: string;
    error: boolean;
    open: boolean;
    setOpen: (open: boolean) => void;
}
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

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

interface lemondProps {
    reservtionId: number;
    open: boolean; 
    refreshReservations: () => void
    setOpen: (open:boolean) => void
}
export const DialogCompLemondas : React.FC<lemondProps> = ({open,setOpen, reservtionId, refreshReservations}) =>{
    const [answer,setAnswer] = useState(false);
    const handleClose = () => {
        setAnswer(false)
        setOpen(false);
    };
    const handleYes = () => {
        setAnswer(true)
        setOpen(false);
    }
    
    const handleCancelReservation = async (reservtionId: number) => {
            const token = localStorage.getItem('token')
            await fetch(`http://localhost:3000/reservation/stateme/${reservtionId}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              }
            })
      }
      
      if (answer) {
        handleCancelReservation(reservtionId);
        refreshReservations();
      }
    return (
        <Dialog
            open={open} 
        >
            <DialogTitle>{"Törlés"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Biztosan szeretné lemondani a foglalást?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Nem</Button>
                <Button onClick={handleYes}>Igen</Button>
            </DialogActions>
        </Dialog>
    );
}
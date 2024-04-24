import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

/**
 * Props interfész a DialogCompLemondas komponenshez.
 * 
 * @param reservationId A lemondani kívánt foglalás azonosítója.
 * @param open A párbeszédablak megjelenítését szabályozó állapot.
 * @param refreshReservations A foglalások frissítésére szolgáló függvény.
 * @param setOpen A párbeszédablak állapotának beállítása.
 */
export interface lemondProps {
    reservtionId: number;
    open: boolean;
    refreshReservations: () => void
    setOpen: (open: boolean) => void
}
/**
 * DialogCompLemondas - Egy párbeszédablak, amely lehetőséget ad a felhasználónak,
 * hogy megerősítse vagy elutasítsa a foglalás lemondását.
 * 
 * @param props A komponens által használt propsok.
 */
export const DialogCompLemondas: React.FC<lemondProps> = ({ open, setOpen, reservtionId, refreshReservations }) => {
    const [answer, setAnswer] = useState(false);

    /**
     * handleClose - Kezeli a "Nem" gombra történő kattintást, bezárja a párbeszédablakot.
     */
    const handleClose = () => {
        setAnswer(false)
        setOpen(false);
    };
    /**
     * handleYes - Kezeli az "Igen" gombra történő kattintást, aktiválja a lemondási folyamatot.
     */
    const handleYes = () => {
        setAnswer(true)
        setOpen(false);
    }
    /**
 * handleCancelReservation - Felelős a foglalás lemondásáért az API-n keresztül.
 * 
 * @param reservationId A lemondani kívánt foglalás azonosítója.
 */
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
    // A felhasználó válasza alapján elindítja a lemondási folyamatot.
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
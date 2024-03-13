import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export function DialogComp({ open }: { open: boolean }) {
    const [isOpen, setOpen] = useState(open);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={isOpen} 
            onClose={handleClose}
        >
            <DialogTitle>{"Törlés"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Biztosan szeretné törölni az általa választott elemet?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Nem</Button>
                <Button onClick={handleClose}>Igen</Button>
            </DialogActions>
        </Dialog>
    );
}
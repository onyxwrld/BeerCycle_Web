import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
/**
 * A DialogComp komponens props interfésze.
 *
 * @param open - Logikai érték, amely jelzi, hogy a párbeszédablak nyitva van-e.
 * @param id - Azonosítója annak az elemnek, amelyet törölni kívánnak.
 * @param onClose - A párbeszédablakot bezáró funkció.
 * @param onDelete - A törlés után végrehajtandó funkció.
 */
export function DialogComp({ open,id, onClose,onDelete }: { open: boolean,id:number, onClose: ()=> void , onDelete: ()=> void}) {
      /**
     * Komment vagy értékelés törlése azonosító alapján.
     *
     * @param id - A törölni kívánt komment vagy értékelés azonosítója.
     */
    async function deleteComment(id:number){
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`http://localhost:3000/review/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            console.log('ok')
        }
        const responseData = await response.json();
        onDelete(); // Sikeres törlés után meghívja az onDelete funkciót
        onClose(); // Bezárja a párbeszédablakot.
    } catch (error) {
        console.error('Hiba történt a kérés során:', error);
    }
    }
    return (
        <Dialog
            open={open} 
            onClose={onClose}
        >
            <DialogTitle>{"Törlés"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Biztosan szeretné törölni az általa választott elemet?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Nem</Button>
                <Button onClick={()=> deleteComment(id)}>Igen</Button>
            </DialogActions>
        </Dialog>
    );
}
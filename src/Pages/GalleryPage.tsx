import { Container, Grid, IconButton, Modal, makeStyles } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

export function GalleryPage() {

    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    let selfi = 'selfi ';
    const selfiArray = [];
    for (let index = 1; index < 16; index++) {
        selfiArray.push(selfi + `(${index}).jpg`);
    }
    const handleOpen = (image: string) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    console.log(open);
    return (
        <>
            <Container >
                <Grid container justifyContent="center" spacing={4} sx={{ mt: 15 }}>
                    {selfiArray.map((selfiImage, index) => (
                        <Grid item xs={6} sm={3} md={3} lg={3} key={index} >
                            <img style={{
                                margin: '4px',
                                maxWidth: '100%',
                                height: 'auto',
                                display: 'block',
                            }} src={`/Images/beerselfi/${selfiImage}`} alt={`Selfi ${index}`} onClick={() => handleOpen(selfiImage)} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Modal open={open} onClose={handleClose} keepMounted>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <IconButton onClick={handleClose}>
                        <CloseIcon
                            sx={{
                                backgroundColor: '#f44336',
                                borderRadius: 3,
                            }}
                        />
                    </IconButton>
                    <img src={`/Images/beerselfi/${selectedImage}`} alt="Nagyított kép" />

                </div>
            </Modal>
        </>
    )
}
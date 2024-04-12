import { Container, Grid, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
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
    const handleNext = (leng: number,selectedImage:string) => {
        const currImg = parseInt(selectedImage.match(/\d+/)![0]);
        let nextImg;
        if (currImg !== leng) {
          nextImg= currImg + 1; 
        } else {
          nextImg = 1; 
        }
        const newFileName = `selfi (${nextImg}).jpg`;
        setSelectedImage(newFileName);
    }

    return (
        <>
            <Container >
                <Grid className="justify-center items-center flex mt-2">
                    <img src="/Images/galleryLogo.png" alt="" className="w-1/2 mt-2 "/>
                </Grid>
                <Grid container justifyContent="center" spacing={4} sx={{mt:8, mb: 15 }}>
                    {selfiArray.map((selfiImage, index) => (
                        <Grid item xs={6} sm={3} md={3} lg={3} key={index} >
                            <img
                                id="index"
                                className="hover:scale-110 ease-in-out transform rounded-xl"
                                style={{
                                    margin: '4px',
                                    maxWidth: '100%',
                                    height: 'auto',
                                    display: 'block',
                                }} src={`/Images/beerselfi/${selfiImage}`} alt={`Selfi ${index}`} onClick={() => handleOpen(selfiImage)} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Modal open={open} onClose={handleClose}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <IconButton onClick={handleClose}>
                        <CloseIcon
                            sx={{
                                backgroundColor: '#f44336',
                                borderRadius: 100,
                                width: 40,
                                height: 40
                            }}
                        />
                    </IconButton>
                    <img src={`/Images/beerselfi/${selectedImage}`} alt="Nagyított kép" className="w-1/3 rounded-2xl" />
                    <IconButton >
                        <NavigateNextIcon
                            className="bg-orange-500 rounded-full" 
                            sx={{
                                borderRadius: 100,
                                width: 40,
                                height: 40
                            }}
                            onClick={()=>handleNext(16,selectedImage)}
                             />
                    </IconButton>
                </div>
            </Modal>
        </>
    )
}
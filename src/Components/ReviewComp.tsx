import { Box, Grid, IconButton, Rating, Typography } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DialogComp } from "./DialogComp";
import { TurnLeft } from "@mui/icons-material";
import { useState } from "react";


export function ReviewComponent({ rate, content, username, id,isMainPage,onDelete }: { rate: number, content: string, username: string, id: number,isMainPage:boolean,onDelete: ()=>void }) {
    const [open,setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };


    return <>
        <DialogComp open={open} id={id} onClose={handleClose} onDelete={onDelete}/>

        <Box
            minHeight={100}
            width={200}
            sx={{
                boxShadow: 2,
                borderRadius: 3,
                m: 2
            }}
        >
            <Grid height="100%" item spacing={3}>
                <Grid item>
                    <Typography>
                        {username}
                    </Typography>
                </Grid>
                <Grid container alignItems={"center"}>
                    <Grid item sx={{flexGrow:1}}>
                        <Rating value={rate} readOnly sx={{ p: 0 }} />
                    </Grid>
                    
                    {
                        (!isMainPage)
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
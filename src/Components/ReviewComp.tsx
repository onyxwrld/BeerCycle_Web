import { Box, Grid, IconButton, Rating, Typography } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DialogComp } from "./DialogComp";
import { TurnLeft } from "@mui/icons-material";

async function deleteComment(id: number) {
    <DialogComp open={true}/>
    /*
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
    } catch (error) {
        console.error('Hiba történt a kérés során:', error);
    }
    window.location.reload();
    */
}
export function ReviewComponent({ rate, content, username, id,isMainPage }: { rate: number, content: string, username: string, id: number,isMainPage:boolean }) {
    return (

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
                                <IconButton onClick={() => deleteComment(id)}>
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
    );
}
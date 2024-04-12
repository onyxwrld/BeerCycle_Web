import { Button } from "@mui/material";
import { useState } from "react"
import SnackBarAlert from "../Components/SnackBar";

export const TestPage = () =>{
    const [open,setOpen] = useState(false);
    const handelOpen = ()=>{
        setOpen(true)
    }
    return<>
    <Button onClick={handelOpen}>Katt</Button>
    <SnackBarAlert alertMessage="Hibás karakter lánc" error={true} open={open} setOpen={setOpen}/>
    </>
}
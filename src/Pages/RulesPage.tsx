import { IconButton, Modal, Typography } from "@mui/material"
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

export function RulesPage() {

    const [open, setOpen] = useState(false);
    const [openStickyId, setOpenStickyId] = useState('');
    const handleOpen = (id: string) => {
        setOpenStickyId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const getStickyContent = () => {
        switch (openStickyId) {
            case 'sticky1':
                return <Typography>Sticky 1 tartalma</Typography>;
            case 'sticky2':
                return <Typography>Sticky 2 tartalma</Typography>;
            case 'sticky3':
                return <Typography>Sticky 3 tartalma</Typography>;
            default:
                return null;
        }
    };
    return (<>
        <Modal open={open} onClose={handleClose} keepMounted>
            <div className=" flex justify-center items-center h-screen mx-auto max-w-3xl bg-amber m-5">
                {getStickyContent()}
            </div>
        </Modal>
        <img src="/src/Images/sticky2.png" alt="" id="sticky3" className="z-20 absolute w-2/12 hover:scale-110 ease-in-out transition right-96 top-32 -rotate-12" onClick={(e) => { handleOpen(e.currentTarget.id) }} />
        <img src="/src/Images/sticky2.png" alt="" id="sticky2" className="z-20 absolute w-2/12 hover:scale-110 ease-in-out transition right-32 bottom-32 rotate-12" onClick={(e) => { handleOpen(e.currentTarget.id) }} />
        <img src="/src/Images/sitkcy1.png" alt="" id="sticky1" className="z-20 absolute w-2/12 hover:scale-110 ease-in-out transition left-64 bottom-12" onClick={(e) => { handleOpen(e.currentTarget.id) }} />
        <img src="/src/Images/parafatabla.png" alt="" className="z-10 relative" />
    </>
    )
}

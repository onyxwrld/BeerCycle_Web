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
                return <>
                    <Typography className="text-ink font-mono ">
                        <div>
                        <div className="font-semibold pt-10">BeerCycle Foglalási és Lemondási Szabályzat:</div>
                        <div className="mt-4">
                            <div className="font-semibold">1. Foglalás:</div>
                            <ul className="list-disc ml-8">
                                <li>A BeerCycle bicikli kölcsönzéséhez előzetes foglalás szükséges.</li>
                                <li>A foglalást online platformunkon keresztül teheted meg, ahol megadhatod az igényelt időpontot és a fizetési adatokat.</li>
                                <li>A foglalás során minden részletet pontosan tölts ki, beleértve a nevet, az elérhetőséget és a fizetési információkat.</li>
                            </ul>
                        </div>

                        <div className="mt-4">
                            <div className="font-semibold">2. Fizetési Politika:</div>
                            <ul className="list-disc ml-8">
                                <li>A fizetés csak online történik, a foglalás során megadott bankkártya vagy egyéb fizetési módokon keresztül.</li>
                                <li>A fizetési adatokat biztonságosan kezeljük, és azokat kizárólag a foglaláshoz kapcsolódó tranzakciókra használjuk.</li>
                            </ul>
                        </div>

                        <div className="mt-4">
                            <div className="font-semibold">3. Lemondási Szabályzat:</div>
                            <ul className="list-disc ml-8">
                                <li>A foglalást legalább egy nappal előre lehet lemondani.</li>
                                <li>Lemondás esetén a teljes összeget visszatérítjük a foglalást leadó személy által megadott fizetési módon.</li>
                                <li>Későn lemondott foglalások esetén nem áll módunkban visszatérítést biztosítani.</li>
                            </ul>
                        </div>

                        <div className="mt-4">
                            <div className="font-semibold">4. Fizetési Garancia:</div>
                            <ul className="list-disc ml-8">
                                <li>Nincs visszafizetési garancia a foglalásra, kivéve a lemondási szabályzatban meghatározott esetekben.</li>
                            </ul>
                        </div>

                        <div className="mt-4">
                            <div className="font-semibold">5. Számlázás:</div>
                            <ul className="list-disc ml-8">
                                <li>A foglalást leadott személy nevére fogjuk kiállítani a számlát.</li>
                                <li>A számlázás a foglalásban megadott nevet és fizetési információkat fogja tükrözni.</li>
                            </ul>
                        </div>

                        <div className="mt-4">Kérjük, vedd figyelembe a fent említett szabályokat és feltételeket a foglalás során. Ha kérdésed van, kérjük, lépj kapcsolatba ügyfélszolgálatunkkal. Köszönjük, hogy a BeerCycle-t választottad!</div>
                        </div>
                    </Typography>
                </>;
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
            <div className="rounded-xl flex justify-center items-center h-full mx-auto max-w-3xl bg-amber m-5 p-5 overflow-y-scroll overflow-y-visible">
                {getStickyContent()}
            </div>
        </Modal>
        <img src="/Images/sticky2.png" alt="" id="sticky3" className="z-20 absolute w-2/12 hover:scale-110 ease-in-out transition right-96 top-32 -rotate-12" onClick={(e) => { handleOpen(e.currentTarget.id) }} />
        <img src="/Images/sticky2.png" alt="" id="sticky2" className="z-20 absolute w-2/12 hover:scale-110 ease-in-out transition right-32 bottom-32 rotate-12" onClick={(e) => { handleOpen(e.currentTarget.id) }} />
        <img src="/Images/sitkcy1.png" alt="" id="sticky1" className="z-20 absolute w-2/12 hover:scale-110 ease-in-out transition left-64 bottom-12" onClick={(e) => { handleOpen(e.currentTarget.id) }} />
        <img src="/Images/parafatabla.png" alt="" className="z-10 relative" />
    </>
    )
}

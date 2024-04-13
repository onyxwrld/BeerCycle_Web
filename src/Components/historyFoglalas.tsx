import { BicycleType, Reservation, ReservationState } from "../Interfaces/Reservation";
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Modal, Grid, Divider } from '@mui/material';
import { useState } from "react";
import { DialogCompLemondas } from "./DialogCompLemondas";

interface Props {
  foglalas: Reservation[]
  refreshReservations: () => void
}


const ReservationCard = ({ foglalas,refreshReservations }: Props)=> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [open, setOpen] = useState(false);
  const [openDialog, setOpneDialog] = useState(false);
  const [reservationId, setReservationId] = useState(0);
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);
  const handleClose = () => {
    setOpen(false);
  };
  const handelModalOpen = () => {
    setOpen(true);
  }
  const getReservationContent = (reservationItem: Reservation) => {
    setSelectedReservation(reservationItem)
    handelModalOpen();
  }
  const isDisabled = (x: Reservation) => {
    const startTimeDate = new Date(x.start_time);
    return startTimeDate.getTime() <= today.getTime() || x.state === ReservationState.Cancelled || x.state === ReservationState.Done;
  };


  const handleCancelClick = (id: number) => {
    setOpneDialog(true);
    setReservationId(id);

  };
  return (
    <>
      <DialogCompLemondas open={openDialog} setOpen={setOpneDialog} reservtionId={reservationId} refreshReservations={refreshReservations} />
      {foglalas.map((x,index) => {
        return (
          <Grid item spacing={4}>
            <Card  key={index} className="p-4 m-5 hover:scale-110 transition ease-out bg-orange-200" sx={{
              borderRadius: '15px',
            }}>
              <CardMedia

                component="img"
                alt="bike"
                sx={{
                  height: '150px',
                  borderRadius: '15px'
                }}
                image={
                  x.bicycle.type === BicycleType.Small ? '/Images/small.png' :
                    x.bicycle.type === BicycleType.Medium ? '/Images/mediumBike.png' :
                      '/Images/largeBike.png'
                }
              />
              <CardContent>
                <Grid>
                  <Typography>
                    {new Date(x.start_time).toLocaleString()}
                  </Typography>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item spacing={6}>
                    <Typography >
                      <div className={
                        x.state === ReservationState.Cancelled ? 'rounded-full w-2 h-2 m-2 bg-red-500' :
                          x.state === ReservationState.Done ? 'rounded-full w-2 h-2 m-2 bg-green-500' :
                            'rounded-full w-2 h-2 bg-yellow-500 m-2'}
                      ></div>
                    </Typography>
                  </Grid>
                  <Grid item spacing={6} className={
                    x.state === ReservationState.Cancelled ? 'text-red-500' :
                      x.state === ReservationState.Done ? 'text-green-500' :
                        'text-yellow-500'
                  }
                  >
                    <Typography>
                      {
                        x.state === ReservationState.Cancelled ? 'Canceled' :
                          x.state === ReservationState.Done ? 'Done' :
                            'Pending'
                      }
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button
                  sx={{ borderRadius: '15px', backgroundColor: isDisabled(x) ? 'grey' : 'red' }}
                  onClick={() => handleCancelClick(x.id)}
                  disabled={isDisabled(x)}
                >
                  {
                    x.state === ReservationState.Cancelled ? 'Lemondva' : 
                    x.state === ReservationState.Done ? 'Kifizetve' : 
                    'Lemondom'
                  }
                </Button>
                <Button
                  onClick={() => getReservationContent(x)}
                >
                  Kosár
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )
      })}
      <Modal open={open} onClose={handleClose}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
          {selectedReservation?.basket?.menu.map((menuItem) => (
            <Typography key={menuItem.id} variant="body1" component="p">
              <Grid container spacing={2}>
                <Grid item spacing={6} className=" flex justify-start">
                  {menuItem.name}
                </Grid>
                <Grid item spacing={6} className=" flex justify-end">
                  {menuItem.price.toLocaleString('hu-HU')} Ft
                </Grid>
              </Grid>
            </Typography>
          ))}
          <Typography>
            {
              <Grid container spacing={2}>
              <Grid item spacing={6} className=" flex justify-start">
                {
                selectedReservation?.bicycle.type === BicycleType.Large ? 'Nagy bicikli' : 
                selectedReservation?.bicycle.type === BicycleType.Medium ? 'Közepes bicikli' : 
                'Kicsi bicikli'
                }
              </Grid>
              <Grid item spacing={6} className=" flex justify-end">
                {selectedReservation?.bicycle.price.toLocaleString('hu-HU')} Ft
              </Grid>
            </Grid>
            }
          </Typography>
          <Divider />
          <Grid className="font-bold justify-end flex">
            {selectedReservation?.total_amount.toLocaleString('hu-HU')} Ft
          </Grid>
        </div>
      </Modal>
    </>
  );
}

export default ReservationCard;
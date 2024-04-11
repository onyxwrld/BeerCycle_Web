import { BicycleType, Reservation, ReservationState } from "../Interfaces/Reservation";
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Modal, Grid } from '@mui/material';
import { useState } from "react";

interface Props {
  foglalas: Reservation[]
}


const ReservationCard = ({ foglalas }: Props) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [open, setOpen] = useState(false);
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
    return startTimeDate.getTime() <= today.getTime() || x.state === ReservationState.Cancelled;
  };
  const handleCancelReservation = async (reservtionId: number) => {
    const token = localStorage.getItem('token')
    await fetch(`http://localhost:3000/reservation/stateme/${reservtionId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  }

  const handleCancelClick = (start_time: string, reservtionId: number) => {

    const startTimeDate = new Date(start_time);
    if (startTimeDate.toDateString() < today.toDateString()) {
      handleCancelReservation(reservtionId);
    }
    else {
      console.log('XD');
    }
  };
  return (
    <>
      {foglalas.map((x) => {
        return (
          <Grid item spacing={4}>
            <Card className="p-4 m-5 hover:scale-110 transition ease-out" sx={{
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
                <Typography className={
                  x.state === ReservationState.Cancelled ? 'text-red-500' :
                    x.state === ReservationState.Done ? 'text-green-500' :
                      'text-yellow-500'}>
                  <div className={
                    x.state === ReservationState.Cancelled ? 'rounded-full w-2 h-2 bg-red-500' :
                      x.state === ReservationState.Done ? 'rounded-full w-2 h-2 bg-green-500' :
                        'rounded-full w-2 h-2 bg-yellow-500'}
                  ></div>
                  {
                    x.state === ReservationState.Cancelled ? 'Canceled' :
                      x.state === ReservationState.Done ? 'Done' :
                        'Pending'
                  }
                </Typography>
                <Typography>
                  {new Date(x.start_time).toLocaleString()}
                </Typography>
                <Typography sx={{

                }}>
                  {x.total_amount.toLocaleString('hu-HU')} Ft
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{ borderRadius: '15px', backgroundColor: isDisabled(x) ? 'grey' : 'red' }}
                  onClick={() => handleCancelClick(x.start_time, x.id)}
                  disabled={isDisabled(x)}
                >
                  Lemondom
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
              {menuItem.name}: {menuItem.price.toLocaleString('hu-HU')} Ft
            </Typography>
          ))}
        </div>
      </Modal>
    </>
  );
}

export default ReservationCard;
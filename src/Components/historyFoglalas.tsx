
import { Reservation, ReservationState } from "../Interfaces/Reservation";
import { Box } from '@mui/system';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import { AccessTime, CheckCircleOutline, ErrorOutline } from "@mui/icons-material";

interface Props {
  foglalas: Reservation[]
}
export const StatusChip = (status: string) => {
  const color = status === 'canceled' ? 'red' : status === 'pending' ? 'yellow' : 'green';
  const Icon = status === 'canceled' ? ErrorOutline : status === 'pending' ? AccessTime : CheckCircleOutline;

  return (
    <Box className={`flex items-center p-2 ${status}`}>
      <Icon style={{ color: color }} />
      <Typography variant="body2" className="ml-2">
        {status}
      </Typography>
    </Box>
  );
};
const ReservationCard = ({ foglalas }: Props) => {
  return (
    <>
      {foglalas.map((x) => (
        <Card className="p-4 m-5 hover:scale-110 transition ease-out" sx={{
          borderRadius: '15px',
        }}>
          <CardMedia
            component="img"
            alt="bike"
            height="140"
            image={
              x.bicycle_id.type === 'small' ? './Images/small.png' :
                x.bicycle_id.type === 'medium' ? './Images/mediumBike.png' :
                  './Images/largeBike.png'
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
            
              {x.start_time}
            </Typography>
            <Typography variant="body1">
              {x.total_amount} Ft
            </Typography>
          </CardContent>
          <CardActions>

          </CardActions>
        </Card>

      ))}


    </>
  );
}

export default ReservationCard;
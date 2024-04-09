import { User } from "./User";

export enum ReservationState {
  Cancelled = 'Cancelled',
  Done = 'Done',
  Pending = 'Pending',
}

enum ReservationTime {
  One,
  Three,
  Five,
}

export interface Reservation {
  id: number;
  user: User;
  basket_id: number,
  bicycle_id: Bicycle;
  start_time: string;
  location: string;
  reservation_time: ReservationTime;
  state: ReservationState;
  total_amount: number;
}
interface Bicycle {
  id: number;
  type: string;
  price: number;
  reservationId: Reservation[];
}
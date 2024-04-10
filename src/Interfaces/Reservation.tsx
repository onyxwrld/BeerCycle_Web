import { Basket } from "./Basket";
import { User } from "./User";

export enum ReservationState {
  Cancelled = 'Cancelled',
  Done = 'Done',
  Pending = 'Pending',
}
export enum BicycleType{
  Small = "Small",
  Medium = "Medium",
  Large = "Large"
}
export enum ReservationTime {
  One,
  Three,
  Five,
}

export interface Reservation {
  id: number;
  user: User;
  basket_id: number,
  basket: Basket
  bicycle_id: number;
  bicycle: Bicycle;
  start_time: string;
  location: string;
  reservation_time: ReservationTime;
  state: ReservationState;
  total_amount: number;
}
export interface Bicycle {
  id: number;
  type: BicycleType;
  price: number;
  reservationId: Reservation[];
}
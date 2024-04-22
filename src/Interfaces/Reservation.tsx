import { Basket } from "./Basket";
import { User } from "./User";

/**
 * Enum a foglalás állapotának jelzésére.
 * Tartalmazza a lehetséges állapotokat, amelyek a foglalás életciklusa során előfordulhatnak.
 */
export enum ReservationState {
  Cancelled = 'Cancelled', // A foglalást törölték
  Done = 'Done',           // A foglalást már teljesítették
  Pending = 'Pending',     // A foglalás még függőben van, nem került véglegesítésre
}
/**
 * Enum a kerékpárok típusának meghatározására.
 */
export enum BicycleType{
  Small = "Small",   // Kis méretű kerékpár
  Medium = "Medium", // Közepes méretű kerékpár
  Large = "Large"    // Nagy méretű kerékpár
}
/**
 * Enum a foglalás időtartamának jelzésére órákban.
 */
export enum ReservationTime {
  One,   // 1 óra
  Three, // 3 óra
  Five,  // 5 óra
}
/**
 * Interfész egy foglalás adatainak tárolására.
 */
export interface Reservation {
  id: number;                     // A foglalás egyedi azonosítója.
  user: User;                     // A felhasználó, aki a foglalást készítette.
  basket_id: number,              // A kosár egyedi azonosítója, amit a foglalás tartalmaz.
  basket: Basket                  // A kosár, ami a foglalás részét képezi.
  bicycle_id: number;             // A kerékpár egyedi azonosítója, amit a foglalás tartalmaz.
  bicycle: Bicycle;               // A kerékpár, ami a foglalás részét képezi.
  start_time: string;             // A foglalás kezdő időpontja.
  location: string;               // A foglalás helyszíne.
  reservation_time: ReservationTime; // A foglalás időtartama.
  state: ReservationState;        // A foglalás jelenlegi állapota.
  total_amount: number;           // A foglalás teljes összege.
}
/**
 * Interfész egy kerékpár adatainak tárolására.
 */
export interface Bicycle {
  id: number;                  // A kerékpár egyedi azonosítója.
  type: BicycleType;           // A kerékpár típusa.
  price: number;               // A kerékpár ára.
  reservationId: Reservation[]; // A kerékpárhoz kapcsolódó foglalások listája.
}
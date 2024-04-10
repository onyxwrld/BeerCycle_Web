import { Menu } from "./Menu";

export interface Basket{
    id:number;
    userId:number;
    deleted: boolean;
    menu: Menu[];
}
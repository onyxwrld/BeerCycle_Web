/**
 * Basket interface lehetővé teszi a Menu tömbök, valamint a user kosarához tartozó adatok kezelését
 * @interface
 */

export interface Basket{
    /**
     * Id: egy szám tipus ami az adott kosár számát jelöli
     */
    id:number;
    /**
     * userId: minden kosár egy adott user-hez tartozhat, ezért a userId felelős
     */
    userId:number;
    /**
     * deleted: Egy boolean tipus ami a korsár állapotára utal, ha leadtak egy foglalást nem törlődik az adatbázisból, hanem true értéket vesz fel.
     */
    deleted: boolean;
    /**
     * Minden kosárhoz menü elemek tartoznak igy egy tömbként tárolódnak
     */
    menu: Menu[];
}
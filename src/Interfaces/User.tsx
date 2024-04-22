/**
 * Egy felhasználó adatait tároló interface.
 */
export interface User {
    /**
     * A felhasználó egyedi azonosítója.
     */
    id: number;

    /**
     * A felhasználó által választott felhasználónév.
     */
    username: string;

    /**
     * A felhasználó e-mail címe.
     */
    email: string;

    /**
     * A felhasználó keresztneve.
     */
    first_name: string;

    /**
     * A felhasználó vezetékneve.
     */
    last_name: string;

    /**
     * A felhasználó szerepe az alkalmazásban.
     * Ez a szerep meghatározza, hogy a felhasználó milyen típusú műveleteket hajthat végre.
     * Két féle szerepkör van az alkalmazásban [admin,user] a guest tipust a front-end kezeli
     */
    role: string;
}
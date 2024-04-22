import { User } from "./User";

/**
 * Egy felhasználó által készített értékelést reprezentál.
 */
export interface Review {
    /**
     * Az értékelés egyedi azonosítója.
     */
    id: number;

    /**
     * Az értékelés során megadott numerikus érték.
     * Egy meghatározótt tartományban 1-5 között érték.
     */
    rate: number;

    /**
     * Az értékelés szöveges tartalma.
     */
    content: string;

    /**
     * A felhasználó egyedi azonosítója, aki az értékelést írta.
     */
    userId: number;

    /**
     * A felhasználó objektum, aki az értékelést készítette.
     * Ez egy 'User' típusú referenciát tartalmaz, amely részletesebb információt nyújt
     * a felhasználóról, mint például név, e-mail cím stb.
     */
    user: User;
}
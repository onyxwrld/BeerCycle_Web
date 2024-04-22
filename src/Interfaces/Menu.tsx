/**
 * A `Menu` interface egy menüpontot kezel az éttermi vagy kávézói menüben.
 * Tartalmaz egy egyedi azonosítót (`id`), a menüpont nevét (`name`),
 * a menüpont típusát (pl. előétel, főétel, desszert – `type`),
 * valamint az árát (`price`).
 */
interface Menu {
    /**
     * A menüpont egyedi azonosítója.
     */
    id: number;

    /**
     * A menü elem megnevezése.
     */
    name: string;

    /**
     * A menü elem kategóriáját vagy típusát jelöli,
     * például 'drink', 'snack'.
     */
    type: string;

    /**
     * A menü elem ára a pénznem megfelelő egységében.
     */
    price: number;
}

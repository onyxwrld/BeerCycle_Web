import { useContext } from "react";
import { ApiContext } from "./ApiProvider";
interface Props {
    children: React.ReactNode;
}
/**
 * A login Auth egy olyan komponens ami lekéri a bejelentkezett felhaszálót és eldönti, hogy egy guest-ként használja vagy tokennel rendelkező felhasználó
 * Majd itt retrunol egy children-t 
 */
export function LoggedIn({ children } : Props ) {
    const api = useContext(ApiContext);

    if (api.currentUser) {
        return children;
    } else {
        return null;
    }
}

export function Guest({ children } : Props ) {
    const api = useContext(ApiContext);

    if (api.currentUser) {
        return null;
    } else {
        return children;
    }
}
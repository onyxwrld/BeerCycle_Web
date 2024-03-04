import { useContext } from "react";
import { ApiContext } from "./ApiProvider";
interface Props {
    children: React.ReactNode;
}

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
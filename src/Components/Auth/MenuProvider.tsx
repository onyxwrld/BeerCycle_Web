import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Basket } from "../../Interfaces/Basket";
import { ApiContext } from "./ApiProvider";


export const MenuContext = createContext({
    menuListaKiir: async () => {
    },
    basketFeltolt: async (menuItem: Menu) => {

    },
    basketChange: (isChange: boolean) => { }
})
interface Props {
    children: React.ReactNode;
}
export function MenuProvider({ children }: Props) {
    const [basket, setBasket] = useState<Basket>();
    const token = localStorage.getItem('token');
    const api = useContext(ApiContext);
    const [basketChanged, setBasketChanged] = useState<boolean>(false);
    useEffect(() => {
        if (basketChanged) {
            const timeoutId = setTimeout(() => {
                setBasketChanged(false);
            }, 100);
            return () => clearTimeout(timeoutId);
        }
    }, [basketChanged]);
    const menuObj = {
        menuListaKiir: async () => {

        },
        basketFeltolt: async (menuItem: Menu) => {
            const post = JSON.stringify({ menu: menuItem.id });
            const response = await fetch('http://localhost:3000/basket', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                },
                body: post,
            })
            if (response.ok) {
                api.snackBarFunction(`${menuItem.name} hozzá adva a kosárhoz!`, false)
            }
            else{
                api.snackBarFunction(`Nem sikerült hozzáadni a kosárhoz`, true)
            }
            
        },
        basketChange: (isChange: boolean) => {
            setBasketChanged(isChange);
        }
    }
    return (
        <MenuContext.Provider value={menuObj}>
            {children}
        </MenuContext.Provider>
    );
}


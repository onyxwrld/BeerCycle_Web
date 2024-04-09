import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import { Basket } from "../../Interfaces/Basket";

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
    const [basket,setBasket] = useState<Basket>();
    const token = localStorage.getItem('token');
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
        menuListaKiir: async() => {
            
        },
        basketFeltolt: async (menuItem: Menu) => {
            const post = JSON.stringify({ menu: menuItem.id });
            await fetch('http://localhost:3000/basket', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                },
                body: post,
            })
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


import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { createContext, useEffect, useState } from "react";

export const MenuContext = createContext({
    menuListaKiir: () => {
     const [menu, setMenu] = useState<Menu[]>([]);
     return menu    
    },
    basketFeltolt: (menuItem: Menu) =>{

    },
    basketChange: (isChange:boolean) => { }
})
interface Props {
    children: React.ReactNode;
}
export function MenuProvider({ children }: Props) {
    const [menu, setMenu] = useState<Menu[]>([]);
    const [basketChanged, setBasketChanged] = useState<boolean>(false);

    useEffect(() => {
        const storedMenu = localStorage.getItem('menu');
        if (storedMenu) {
            setMenu(JSON.parse(storedMenu));
        }
    }, []);
    useEffect(()=>{
        if(menu.length > 0){
        localStorage.setItem('menu',JSON.stringify(menu));
        localStorage.setItem('basketCount',JSON.stringify(menu.length))
        setBasketChanged(true);
    }
    else{
        localStorage.removeItem('menu');
        localStorage.removeItem('basketCount');
    }
    },[menu])
    useEffect(() => {
        if (basketChanged) {
            const timeoutId = setTimeout(() => {
                setBasketChanged(false);
            }, 100); 
            return () => clearTimeout(timeoutId);
        }
    }, [basketChanged]);
    const menuObj = {
        menuListaKiir: () =>{
            return menu 
        },
        basketFeltolt: (menuItem: Menu) => {
            setMenu(previtem =>[...previtem,menuItem]);    
            
        },
        basketChange: (isChange:boolean)=>{
            setBasketChanged(isChange);
        }
    }
    return (
        <MenuContext.Provider value={menuObj}>
            {children}
        </MenuContext.Provider>
    );
}


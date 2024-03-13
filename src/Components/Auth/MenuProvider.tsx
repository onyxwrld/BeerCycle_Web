import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { createContext, useState } from "react";

export const MenuContext = createContext({
    menuListaKiir: () => {
        
    },
    basketFeltolt: (menuItem: Menu) =>{

    }
})
interface Props {
    children: React.ReactNode;
}
export function MenuProvider({ children }: Props) {
    const [menu, setMenu] = useState<Menu[]>([]);
    const menuObj = {
        menuListaKiir: () => {

            return <>
                {
                    menu?.map((item,index) => {
                        <ListItem key={index}>
                            <ListItemButton>
                                <ListItemText>
                                    {menu[index].name}
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    })
                }
            </>
        },
        basketFeltolt: (menuItem: Menu) => {
            setMenu(prevMenu => [...prevMenu, menuItem]);
        }
    }
    return (
        <MenuContext.Provider value={menuObj}>
            {children}
        </MenuContext.Provider>
    )
}
import { createContext, useContext, useEffect, useState } from "react";
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
/**
 * A menuProvider a menu elemek kezelésére szolgáló contextus. 
 */
export function MenuProvider({ children }: Props) {
    const [basket, setBasket] = useState<Basket[]>([]);
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
        /**
         * 
         * @param menuItem 
         * Mikor meghivódik a basketFeltölt egy menu itemet kap paraméterként. Majd a megadott végpontra postolja a menü id-ját ezáltal hozzá adja a kosárhoz az elemet.
         * Majd a snackBar-t meghíva egy értesitést jelenit meg a felhasználó oldalán a hozzá adás sikerességéről.
         */
        basketFeltolt: async (menuItem: Menu) => {
            try{
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
                        try {
                            const response = await fetch('http://localhost:3000/basket', {
                                method: 'GET',
                                headers: {
                                    'Authorization': `Bearer ${token}`,
                                    'Content-Type': 'application/json'
                                }
                            })
                            const data = await response.json() as Basket[];
                            setBasket(data);
                            localStorage.setItem('basketId', basket[0].id.toString())
            
                        } catch (error) {
                            console.error('Hiba a kosár adatok lekérése során:', error);
                        }
                }
                else{
                    api.snackBarFunction(`Nem sikerült hozzáadni a kosárhoz`, true)
                }
            }
            catch(error){
                console.log(error)
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


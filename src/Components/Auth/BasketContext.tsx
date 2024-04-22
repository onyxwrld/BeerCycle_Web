import React, { createContext, useContext, useState, useEffect } from 'react';
import { Basket } from '../../Interfaces/Basket';
import { useTheme } from '@emotion/react';



interface BasketContextType {
    itemCount: number;
    updateBasketContent: () => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const useBasket = () => {
    const context = useContext(BasketContext);
    if (!context) {
        throw new Error('useBasket must be used within a BasketProvider');
    }
    return context;
}

export const BasketProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [itemCount, setItemCount] = useState(0);

    const updateBasketContent = async () => {
        const basketId = localStorage.getItem('basketId');
        if (!basketId) {
            console.error('Basket ID is missing');
            return;
        }
        try {
            const response = await fetch(`http://localhost:3000/basket/${basketId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const basket: Basket = await response.json();
                const newCount = basket.menu.length;
                setItemCount(newCount);
                console.log(itemCount)
            } else {
                throw new Error('Failed to fetch basket');
            }
        } catch (error) {
            console.error('Error fetching basket:', error);
        }
    }

    useEffect(() => {
        updateBasketContent();
    }, []);

    return (
        <BasketContext.Provider value={{ itemCount, updateBasketContent }}>
            {children}
        </BasketContext.Provider>
    );
};

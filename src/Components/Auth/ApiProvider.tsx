import { createContext, useEffect, useState } from "react";
import { User } from "../../Interfaces/User";
import { useNavigate } from 'react-router-dom';
import { Review } from "../../Interfaces/Review";

export const ApiContext = createContext({
    login: async (username: string, password: string): Promise<void> => {
        throw new Error("nincs implementálva");
    },
    logout: () => { },
    currentUser: null as (User | null),
    register: async (username: string, passwod: string, email: string, last_name: string, first_name: string): Promise<void> => {
        throw new Error("nincs implementálva");
    },
    userReview: async(): Promise<Review[] | undefined> => {
        throw new Error("nincs implementálva");
    }
})

interface Props {
    children: React.ReactNode;
}

export function ApiProvider({ children }: Props) {
    const [token, setToken] = useState('');
    const [loeggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null as User | null);
    const [error, setError] = useState('');

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, [])

    useEffect(() => {
        async function loadUserData() {
            const response = await fetch('http://localhost:3000/user/me', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            if (response.status === 401) {
                setToken('');
                localStorage.removeItem('token');
                setError('Please login again');
                return;
            }
            if (!response.ok) {
                setError('An error occured, try again later');
                return;
            }
            const userData = await response.json() as User;
            setUser(userData);
        }
        if (token){
            
            loadUserData();
        }
        else {
            setUser(null);
        }
       
    }, [token])

    const apiObj = {
        currentUser: user,
        login: async (username: string, password: string) => {
            const loginData = {
                username, password,
            }
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const tokenObj = await response.json();
            setToken(tokenObj.token);
            setLoggedIn(true);
            localStorage.setItem('token', tokenObj.token);
        },
        isLoggedIn: () => {
            return loeggedIn;
        },
        logout: () => {
            setToken('');
            localStorage.removeItem('token');
            window.location.reload();
            
        },
        register: async (username: string, password: string, email: string, last_name: string, first_name: string) => {
            const registerData = {
                username,
                email,
                password,
                first_name,
                last_name
            };
            try {
                const response = await fetch('http://localhost:3000/user/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(registerData),
                });
                if (!response.ok) {
                    throw new Error('Hiba történt a kérés során');
                }
            } catch (error) {
                console.error('Hiba történt a kérés során:', error);
            }
        },
        userReview: async () =>{
           try{ const response = await fetch(`http://localhost:3000/review/userid/${user?.id}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  },
            })
            if (!response.ok) {
                throw new Error('Hiba történt a kérés során');
            } 

            const responseData = await response.json() as Review[];
            return responseData;
        }
        catch(error) {
            console.error('Hiba történt a kérés során:', error);
        }
        }
    };
    return <ApiContext.Provider value={apiObj}>
        {children}
    </ApiContext.Provider>
};

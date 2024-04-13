import { createContext, useEffect, useState } from "react";
import { User } from "../../Interfaces/User";
import { useNavigate } from 'react-router-dom';
import { Review } from "../../Interfaces/Review";
import SnackBarAlert from "../SnackBar";

export const ApiContext = createContext({
    login: async (username: string, password: string): Promise<void> => {
        throw new Error("nincs implementálva");
    },
    logout: () => { },
    currentUser: null as (User | null),
    register: async (username: string, passwod: string, email: string, last_name: string, first_name: string): Promise<boolean> => {
        return false
    },
    userReview: async(): Promise<Review[] | undefined> => {
        throw new Error("nincs implementálva");
    },
    snackBarFunction: (alertMessage:string,error:boolean) =>{
        
    }
})

interface Props {
    children: React.ReactNode;
}

export function ApiProvider({ children }: Props) {
    const [token, setToken] = useState('');
    const [loeggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null as User | null);
    const [alertMessage, setAlertMessage] = useState('');
    const [open,setOpen] = useState(false);
    const [error,setError] = useState(false);
    const handelOpen = ()=>{
        setOpen(true)
    }

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
                setAlertMessage('Please login again');
                return;
            }
            if (!response.ok) {
                setAlertMessage('An error occured, try again later');
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
            localStorage.setItem('ID',user!.id.toString());
        },
        isLoggedIn: () => {
            return loeggedIn;
        },
        logout: () => { 
            setToken('');
            localStorage.removeItem('token');
            localStorage.removeItem('ID');
            localStorage.removeItem('basketCount');
            localStorage.removeItem('basketId');
            const navigate = useNavigate();
            navigate('/')
            
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
                    return false
                }
                else{
                    return true
                }
            } catch (error) {
                return false
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
                setAlertMessage('Hiba történt a kérés során');
            } 

            const responseData = await response.json() as Review[];
            return responseData;
        }
        catch(error) {
            setAlertMessage(`Hiba történt a kérés során: ${error}`);
        }
        },
        snackBarFunction: (alertMessage:string,error:boolean) => {
            setOpen(true)
            setAlertMessage(alertMessage)
            setError(error)
        }

    };
    return <ApiContext.Provider value={apiObj}>
        {children}
        <SnackBarAlert alertMessage={alertMessage} error={error} open={open} setOpen={setOpen}/>
    </ApiContext.Provider>
};

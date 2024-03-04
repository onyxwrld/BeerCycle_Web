import { createContext, useEffect, useState } from "react";
import { User } from "../../Interfaces/User";

export const ApiContext = createContext({
    login: async (username:string,password:string):Promise<void> => {
        throw new Error("nincs implementálva");
    },
    logout: () => {},
    currentUser: null as (User | null)
})

interface Props{
    children: React.ReactNode;
}

export function ApiProvider({children}:Props){
    const [token, setToken] = useState('');
    const [user, setUser] = useState(null as User | null)
    const [ error, setError ] = useState('')
    
    useEffect(()=>{
        const storedToken = localStorage.getItem('token');
        if(storedToken){
            setToken(storedToken);
        }
    },[])

    useEffect(() => {
        async function loadUserData(){
            const response = await fetch('http://localhost:3000/user/me',{
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
    if(token){
        loadUserData();
    }
    else{
        setUser(null);
    }
    },[token])

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
            localStorage.setItem('token', tokenObj.token);
           },
           logout: () => {
            setToken('');
            localStorage.removeItem('token');
        }   
        };
        return <ApiContext.Provider value={apiObj}>
            {children}
        </ApiContext.Provider>
};

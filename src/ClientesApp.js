import React, { useEffect, useState } from 'react'
import { AuthContext } from './components/auth/AuthContext'
import { AppRouter } from './routers/AppRouter'

export const ClientesApp = () => {
    
    const initialUser = JSON.parse(localStorage.getItem('user')) || null

    const [user,setUser] = useState(initialUser);

    useEffect(() => {
        localStorage.setItem('user',JSON.stringify(user))
    }, [user])
    
    return (
        <AuthContext.Provider value={{user,setUser}}>
            <AppRouter />
        </AuthContext.Provider>
    )
}

import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../../firebase/firebase'
import { AuthContext } from '../auth/AuthContext'

export const HomeScreen = () => {

    const {user} = useContext(AuthContext)

    const history = useHistory()

    const handleClickClientes = (e) =>{
        history.push('/list')
    }

    const {setUser} = useContext(AuthContext)
    const handleClickCerrar = (e) =>{
        auth.signOut()
            .then(()=>{
                setUser(null)
                history.replace('/auth/login')
            })
            .catch(err=>{
                console.error(`${err.code} - ${err.message}`)
            })
    }

    return (
        <div className="container mt-3">
            <h1>Pantalla principal</h1>
            <hr/>
            <div className="d-grid gap-2">
                <button
                    onClick={handleClickClientes}
                    className="btn btn-primary">
                    Manejar clientes
                </button>
                
                <button
                    onClick={handleClickCerrar}
                    className="btn btn-danger">
                    Cerrar sesión
                </button>
            </div>
        </div>
    )
}


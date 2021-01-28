import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase/firebase'
import { useForm } from '../../hooks/useForm'
import { AuthContext } from './AuthContext'

    export const LoginScreen = () => {

        const [{email,password},handleInputChange] = useForm({
            email:'',
            password:''
        })

        const isInvalid = email.trim() === '' || password.trim() === ''
        const [error, setError] = useState()

        const history = useHistory()

        const {setUser} = useContext(AuthContext)
        const handleSubmit = (e) =>{
            e.preventDefault()
            
            auth.signInWithEmailAndPassword(email,password)
            .then((UserCredentials)=>{
                setUser(UserCredentials.user)
                history.replace('/')
            })
            .catch((err)=>{
                setError(`${err.code} - ${err.message}`)
            })
        }

        return (
            <div className="container mt-3">
                <h1>Iniciar sesión</h1>
                <hr />
                <form onSubmit={handleSubmit} className=" d-grid gap-2">
                    <input
                        autoComplete="off"
                        name='email'
                        onChange={handleInputChange}
                        value={email}
                        className="form-control"
                        type='text'
                        placeholder='Correo Electrónico'
                    />
                    <input
                        name='password'
                        onChange={handleInputChange}
                        value={password}
                        className="form-control"
                        type='password'
                        placeholder='Contraseña'
                    />

                    {
                        error && <div className="alert alert-danger">{error}</div>
                    }

                    <button
                        disabled={isInvalid}
                        className="btn btn-primary" 
                        type="submit"
                    >
                        Iniciar sesión
                    </button>
                </form>
                <hr/>
                <Link to="/auth/register"><p>¿No tienes cuenta? ¡Registrate aqui!</p></Link>
                <Link to="/auth/password"><p>¿Olvidaste tu contraseña? ¡Da click aquí!</p></Link>
            </div>
        )
    }
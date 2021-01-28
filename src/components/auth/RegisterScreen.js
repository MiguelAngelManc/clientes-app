import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { auth } from '../../firebase/firebase'
import { AuthContext } from './AuthContext'

export const RegisterScreen = () => {

    const [{email, passwordOne, passwordTwo},handleInputChange] = useForm({
        email:'',
        passwordOne:'',
        passwordTwo:''
    })

    const isInvalid = email.trim() === '' || passwordOne.trim() === ''
    const [error, setError] = useState()
    const history = useHistory();

    const {setUser} = useContext(AuthContext)
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(passwordOne===passwordTwo){
            auth.createUserWithEmailAndPassword(email,passwordOne)
            .then((userCredentials)=>{
                setUser(userCredentials.user)
                history.replace('/')
            })
            .catch((err)=>{
                setError(`${err.code} - ${err.message}`)
            })

        }else{
            setError('Las contraseñas ingresadas no son las mismas.')
        }
    }

    return (
        <div className="container mt-3">
            <h1>Registrar nueva cuenta</h1>
            <hr />
            <form className="d-grid gap-2" onSubmit={handleSubmit}>
                <input
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                    name='email'
                    className="form-control"
                    type='text'
                    placeholder='Correo Electrónico'
                />
                <input
                    value={passwordOne}
                    onChange={handleInputChange}
                    name='passwordOne'
                    className="form-control"
                    type='password'
                    placeholder='Contraseña'
                />
                <input
                    value={passwordTwo}
                    onChange={handleInputChange}
                    name='passwordTwo'
                    className="form-control"
                    type='password'
                    placeholder='Confirma tu contraseña'
                />

                {
                    error && <div className="alert alert-danger">{error}</div>
                }

                <button
                    disabled={isInvalid}
                    className="btn btn-primary btn-block" 
                    type="submit"
                >
                    Registrar cuenta
                </button>
            </form>
            <hr/>
            <Link to="/auth/login"><p>¿Ya tienes una cuenta? ¡Inicia sesión aquí!</p></Link>
        </div>
    )
}


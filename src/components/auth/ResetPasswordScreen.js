import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';

export const ResetPasswordScreen = () => {

    const [{email},handleInputChange] = useForm({
        email:''
    })

    const history = useHistory();
    const handleSubmit = (e) =>{
        e.preventDefault()
        history.push('/auth/login')
    }

    return (
        <div className="container mt-3">
            <h1>Reestablecer contraseña</h1>
            <hr />
            <form className=" d-grid gap-2" onSubmit={handleSubmit}>
                <input
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                    name='email'
                    className="form-control"
                    type='text'
                    placeholder='Correo Electrónico'
                />
                <button
                    className="btn btn-primary btn-block" 
                    type="submit"
                >
                    Reestablecer contraseña
                </button>
            </form>
            <hr/>
            <Link to="/auth/login"><p>¿Recordaste tu contraseña? ¡Inicia sesión aquí!</p></Link>
        </div>
    )
}


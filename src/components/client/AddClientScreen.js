import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { firestore } from '../../firebase/firebase'
import { useForm } from '../../hooks/useForm'

export const AddClientScreen = () => {

    const [{name, email, phone, company},handleInputChange,reset] = useForm({
        name:'',
        email:'',
        phone:'',
        company:'',
    }) 

    const history = useHistory()
    const handleReturn = (e) =>{
        e.preventDefault()
        history.push('/list')
    }

    const isInvalid = name ==='' || email ==='' || phone ==='' || company ===''

    const [{err, msg, loading}, setState] = useState({
        loading:false,
        err:null,
        msg:null
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        setState({
            loading:true,
            err:null,
            msg:null
        })
        firestore.collection('clients').add({
            name,email,phone,company,
            timestamp: new Date().getTime()
        })
            .then((documentReference)=>{
                setState({
                    loading:false,
                    err:null,
                    msg:`Añadido nuevo cliente con ID: ${documentReference.id}`
                })
                reset()
            })
            .catch((error)=>{
                setState({
                    loading:false,
                    msg:null,
                    err:`${error.code} - ${error.message}`
                })
            })
    }

    return (
        <div className="container mt-3">
            <h1>Agregar cliente</h1>
            <hr />
            <form className="d-grid gap-2" onSubmit={handleSubmit}>
                <input
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                    name='name'
                    className="form-control"
                    type='text'
                    placeholder='Nombre Completo'
                />
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
                    autoComplete="off"
                    value={phone}
                    onChange={handleInputChange}
                    name='phone'
                    className="form-control"
                    type='text'
                    placeholder='Teléfono'
                />
                <input
                    autoComplete="off"
                    value={company}
                    onChange={handleInputChange}
                    name='company'
                    className="form-control"
                    type='text'
                    placeholder='Compañía'
                />
                
                { loading && <div class="alert alert-secondary">Procesando...</div>}
                { msg && <div class="alert alert-primary">{msg}</div>}
                { err && <div class="alert alert-danger">{err}</div>}

                <button
                    disabled={isInvalid}
                    className="btn btn-primary" 
                    type="submit"
                >
                    Registrar cliente
                </button>
                <button
                    onClick={handleReturn}
                    type="button"
                    className="btn btn-danger" 
                >
                    Cancelar
                </button>
            </form>
                
            <hr/>
        </div>
    )
}


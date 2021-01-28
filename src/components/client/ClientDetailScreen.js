import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { firestore } from '../../firebase/firebase';
import { useForm } from '../../hooks/useForm'
export const ClientDetailScreen = () => {
    
    const history = useHistory()
    const handleReturn = (e) =>{
        history.push('/list')
    }
    
    const {id} = useParams();
    
    const [{loading, err}, setState] = useState({
        loading:true,
        err:null
    })

    useEffect(()=>{
        firestore.collection('clients').doc(id).get()
        .then((snapshot)=>{
            if(!snapshot.exists){
                setState({
                    loading:false,
                    err:'No existe un cliente con ese ID.'
                })
            }else{    
                setState({
                    loading:false,
                    err:null
                })
                reset({...snapshot.data()})
        }})

    },[])
    
    const [{name, email, phone, company},handleInputChange, reset] = useForm({
        name:'',
        email:'',
        phone:'',
        company:''
    }) 
    
    const isInvalid = name === '' || email === '' || phone === '' || company === ''  

    const handleSubmit = (e) =>{
        e.preventDefault()
        setState({
            loading:true,
            err:null
        })
        firestore.collection('clients').doc(id).update({
            name,
            email,
            phone,
            company
        })
            .then(()=>{
                history.push('/list')
            })
            
    }

    const handleDelete = () =>{
        firestore.collection('clients').doc(id).delete()
            .then(()=>{
                history.push('/list')
            })
            .catch((error)=>{
                setState({
                    loading:false,
                    err:`${error.code} - ${error.message}`
                })
            })
    }

    return (
        <div className="container mt-3">
            <h1>Detalles del cliente</h1>
            <hr />
            { err && <div className="alert alert-danger">{err}</div>}
            {
                (loading)
                    ?
                <div className="alert alert-secondary">Procesando...</div>
                    :
                (!err) 
                    ? 
                <form onSubmit={handleSubmit}>
                    <div className="card ">

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <input
                                    className="form-control form-control-lg"
                                    name="name"
                                    onChange={handleInputChange}
                                    value={name}
                                />
                            </li>
                            <li className="list-group-item">
                                <input
                                    className="form-control"
                                    name="email"
                                    onChange={handleInputChange}
                                    value={email}
                                />
                            </li>
                            <li className="list-group-item">
                                <input
                                    className="form-control"
                                    name="phone"
                                    onChange={handleInputChange}
                                    value={phone}
                                />
                            </li>
                            <li className="list-group-item">
                                <input
                                    className="form-control"
                                    name="company"
                                    onChange={handleInputChange}
                                    value={company}
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="d-grid mt-3">
                        <div className="btn-group" role="group">
                            <button
                                disabled={isInvalid}
                                type="submit"
                                className="btn btn-primary"
                            >
                                Modificar
                            </button>

                            <button
                                onClick={handleDelete}
                                type="button"
                                className="btn btn-danger"
                            >
                                Borrar
                            </button>
                        </div>
                        <button
                            onClick={handleReturn}
                            type="button"
                            className="btn btn-secondary"
                        >
                            Regresar
                        </button>
                    </div>
                </form>
                    :
                <button
                    onClick={handleReturn}
                    type="button"
                    className="btn btn-secondary"
                >
                    Regresar
                </button>
            }
        </div>
    )}
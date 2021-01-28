import React, { useEffect, useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { firestore } from '../../firebase/firebase'
import { ClientCard } from './ClientCard'

export const ClientListScreen = () => {
    
    const history = useHistory()

    const handleAdd = (e) => {
        e.preventDefault()
        history.push('/add')
    }

    const handleReturn = (e) =>{
        e.preventDefault()
        history.push('/')
    }

    const [{loading, listaClientes}, setState] = useState({
        loading:true,
        error:null,
        listaClientes:[]
    })

    
    useEffect(() => {
        firestore.collection('clients').get()
            .then((snapshot)=>{
                const lista = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id:doc.id
                    }
                })
                lista.sort((a,b)=>{
                    return a.timestamp >= b.timestamp ? 1 : -1
                })
                setState({
                    loading:false,
                    error:null,
                    listaClientes:lista
                })
            })
    }, [])

    

    
    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-between">
                <h1>Lista de clientes</h1>
                <button
                    onClick={handleAdd}
                    className="btn btn-primary"
                >
                    Agregar Nuevo
                </button>
            </div>
            <hr/>
            { loading && <div className="alert alert-secondary">Procesando...</div>}
            {
                (listaClientes.length===0 && !loading)
                    ?
                <div className="alert alert-primary">No se encuentran clientes registrados.</div>
                    :
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
                    {listaClientes.map(client=>(
                        <ClientCard key={client.id} client={client}/>
                    ))}
                </div>
            }
            
            <div className="d-grid mt-3">
                <button
                    onClick={handleReturn}
                    className="btn btn-secondary">
                        Regresar
                </button>
            </div>
        </div>
    )
}
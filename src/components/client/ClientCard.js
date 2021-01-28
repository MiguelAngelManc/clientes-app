import React from 'react'
import { useHistory } from 'react-router-dom'

export const ClientCard = ({client}) => {

    const history = useHistory()
    const handleClickCard = (id) =>{
        history.push(`/client/${id}`)
    }

    return (
        <div class="col">
            <div className="card border-primary">
                <div class="card-body">
                    <h5 class="card-title">{client.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{client.email}</h6>
                    <p class="card-text">{client.phone}</p>
                    <p class="card-text">{client.company}</p>
                </div>
                <div class="card-footer d-grid">
                    <button 
                        class="btn btn-primary"
                        onClick={()=>handleClickCard(client.id)}
                    >
                        Ver
                    </button>
                </div> 
            </div>
        </div>
    )
}


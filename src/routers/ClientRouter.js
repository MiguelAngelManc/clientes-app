import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AuthContext } from '../components/auth/AuthContext'
import { AddClientScreen } from '../components/client/AddClientScreen'
import { ClientDetailScreen } from '../components/client/ClientDetailScreen'
import { ClientListScreen } from '../components/client/ClientListScreen'
import { HomeScreen } from '../components/home/HomeScreen'

export const ClientRouter = () => {
    const {user} = useContext(AuthContext)
    return (
        (user)
            ?
        <Switch>
            <Route exact path="/add" component={AddClientScreen} />
            <Route exact path="/list" component={ClientListScreen} />
            <Route exact path="/client/:id" component={ClientDetailScreen} />
            <Route exact path="/" component={HomeScreen} />

            <Redirect to="/" />
        </Switch>
            :
        <Redirect to="/auth/login" />
    )
}
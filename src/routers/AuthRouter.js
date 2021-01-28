import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AuthContext } from '../components/auth/AuthContext'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { ResetPasswordScreen } from '../components/auth/ResetPasswordScreen'

export const AuthRouter = () => {

    const {user} = useContext(AuthContext)
    return (
            (user)
                ?
            <Redirect to="/"/>
                :
            <Switch>
                <Route exact path="/auth/login" component={LoginScreen} />
                <Route exact path="/auth/register" component={RegisterScreen} />
                <Route exact path="/auth/password" component={ResetPasswordScreen} />
    
                <Redirect to="/auth/login" />
            </Switch>
    )
}
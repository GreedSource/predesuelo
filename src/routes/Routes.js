import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


// screens
import Login from '../screen/auth/Login'
import Dashboard from './dashboard'

class Routes extends Component {
    render() {
        const error_404 = (
            <h1>Page not found</h1>
        );
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ Login } />
                    <Route path="/dashboard" component = { Dashboard } />
                    <Route>{ error_404 }</Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
//<Route path="/dashboard" exact={true} component={Dashboard} />
export default Routes
import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


// screens
import Login from '../screen/auth/Login'
import Dashboard from '../screen/Dashboard'
import CovidTracker from '../screen/CovidTracker'
import {Sample} from '../screen/sample'

class Routes extends Component {
    render() {
        const error_404 = (
            <h1>Page not found</h1>
        );
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ Login } />
                    <Route path="/dashboard" exact={true} component={() => <Dashboard title={`Dashboard`} />} />
                    <Route path="/covid-tracker" exact={true} component={() => <CovidTracker title={`CovidTracker`} />} />
                    <Route path="/sample" exact={true} component={Sample} />
                    
                    <Route>{ error_404 }</Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes
import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


// screens
import Login from '../screen/auth/Login'
//import Dashboard from '../screen/Dashboard'
import CovidTracker from '../screen/CovidTracker'
import {Sample, Chart} from '../screen/sample'
import {Fertilizer} from '../screen/fertilizer'
import {Crops} from '../screen/crop'

class Routes extends Component {
    render() {
        const error_404 = (
            <h1>Page not found</h1>
        );
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ Login } />
                    
                    <Route path="/covid-tracker" exact={true} component={CovidTracker} />
                    <Route path="/sample" exact={true} component={Sample} />
                    <Route path="/fertilizer" exact={true} component={Fertilizer} />
                    <Route path="/crop" exact={true} component={Crops} />
                    <Route path="/sample/:id" component={Chart} />
                    <Route>{ error_404 }</Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
//<Route path="/dashboard" exact={true} component={Dashboard} />
export default Routes
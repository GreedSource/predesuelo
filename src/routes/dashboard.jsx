import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from '../screen/Header'
import Sidebar from '../screen/Sidebar'

//import Dashboard from '../screen/Dashboard'
import CovidTracker from '../screen/CovidTracker'
import {Sample, Chart} from '../screen/sample'
import {Fertilizer} from '../screen/fertilizer'
import {Crops} from '../screen/crop'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            islogout: false
        }
    }
    
    render() {
        const {match} = this.props
        return (
            <div id="page-container" className="fade page-sidebar-fixed page-header-fixed">
                <Header/>
                <Sidebar match={match}/>
                <div className="sidebar-bg"></div>
                <div className="content" id='content'>
                    <Switch>
                        <Route exact path={`${match.path}/covid-tracker`} component={CovidTracker} />
                        <Route exact path={`${match.path}/`} component={Sample} />
                        <Route exact path={`${match.path}/crop`} component={Crops} />
                        <Route exact path={`${match.path}/fertilizer`} component={Fertilizer} />
                        <Route exact path={`${match.path}/:id`} component={Chart} />
                    </Switch>
                </div>
                
                <a href="#!" className="btn btn-icon btn-circle btn-success btn-scroll-to-top fade" data-click="scroll-top"><i className="fa fa-angle-up"></i></a>
            </div>
        )
    }
}
//<Route path="/dashboard" exact={true} component={Dashboard} />
export default Dashboard
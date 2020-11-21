import React, { Component } from 'react';
import Layout from './Layout';
import Cookies from 'universal-cookie'
const cookie = new Cookies()

export class Dashboard extends Component {
    
    componentDidMount() {
        if (!cookie.get('id')){
            window.location.href = './'
        }
    }

    render() {
        const view = (
            <h1>{cookie.get('name')}</h1>
        )
        return (
            <Layout component={view} title={this.props.title}></Layout>
        )
    }
}

export default Dashboard;
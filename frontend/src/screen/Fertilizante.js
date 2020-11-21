import React, { Component } from 'react';
import Layout from './Layout';
import {fetchData} from '../api/backend'

export class Fertilizante extends Component {
    state = {
        data: [],
        fertilizante: ''
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData, fertilizante: 'gola'})
    }
    render() {
        const {data, fertilizante} = this.state;
        console.log(this.state)
        const view = (
            data.map((item, index) => <h3 key={item}>{item}</h3>)
        )
        return (
            <Layout component={view} title={this.props.title}></Layout>
        )
    }
}

export default Fertilizante;
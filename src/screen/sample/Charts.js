import React, { Component } from 'react';
//import Loading from '../Loading';
import {SampleChart} from '../../components'
import Layout from '../Layout';
import { fetchResult } from '../../api/samples'
import Cookies from 'universal-cookie'
const cookie = new Cookies() 

export class Chart extends Component {
    state = {
        show: true,
        data: null
    }
    async componentDidMount() {
        if (!cookie.get('id')){
            window.location.href = '../'
        }
        const fetchedResults = await fetchResult(this.props.match.params.id);
        if(fetchedResults){
            if (fetchedResults.recomendado.length > 0){
                this.setState({data: fetchedResults})
            }
        }else{
            window.location.href = '../sample'
        }
        
    }
    render() {
        const view = (
            <div>
                <SampleChart data={this.state.data} />
            </div>
        )
        return (
            <Layout component={view} title={'Sample Chart'} />
        )
    }
}

export default Chart;
import React, { Component } from 'react';
//import Loading from '../Loading';
import {SampleChart} from '../../components'
import Layout from '../Layout';
import { fetchResult } from '../../api/samples'
import { fetchData } from '../../api/fertilizer'
import Cookies from 'universal-cookie'
import List from '../fertilizer/List'
const cookie = new Cookies() 

export class Chart extends Component {
    state = {
        data: null,
        vdata: null
    }
    async componentDidMount() {
        if (!cookie.get('id')){
            window.location.href = '../'
        }
        const fetchedResults = await fetchResult(this.props.match.params.id)
        if(fetchedResults){
            if (fetchedResults.recomendado.length > 0){
                this.setState({data: fetchedResults})
                const fetchedData = await fetchData()
                this.setState({vdata: fetchedData})
                this.setState({show: true})
            }
        }else{
            window.location.href = '../sample'
        }
        
    }
    render() {
        const view = (
            <div>
                <SampleChart data={this.state.data} />
                <List data={this.state.vdata} />
            </div>
        )
        return (
            <Layout component={view} title={'Resultados del análisis de la muestra'} />
        )
    }
}

export default Chart;
import React, { Component } from 'react';
//import Loading from '../Loading';
import {SampleChart} from '../../components'
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
            return window.location.href = '/'
        }
        const fetchedResults = await fetchResult(this.props.match.params.id)
        if(fetchedResults){
            if (fetchedResults.recomendado.length > 0){
                this.setState({data: fetchedResults})
                const fetchedData = await fetchData()
                this.setState({vdata: fetchedData})
            }else{  
                return this.props.history.push('/dashboard')
            }
        }else{
            return this.props.history.push('/dashboard')
        }
        
    }
    render() {
        return (
            this.state.data ? (
                <div>
                    <h1 className="page-header">Resultado de la muestra</h1>
                    <div className="row">
                        <div className="col-md-12">
                            <SampleChart data={this.state.data} />
                            <List data={this.state.vdata} />
                        </div>
                    </div>
                </div>
            ) : null
        )
    }
}

export default Chart;
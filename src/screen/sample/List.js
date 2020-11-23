import React, { Component } from 'react';
import Layout from '../Layout';
import Cookies from 'universal-cookie'
import {fetchCrops} from '../../api/samples'
//import CustomPaginationActionsTable from './table'
import StickyHeadTable from './tb'
import Button from '@material-ui/core/Button';
const cookie = new Cookies()


export class List extends Component {
    state = {
        data: [],
        datos: null
    }

    async componentDidMount() {
        if (!cookie.get('id')){
            window.location.href = './'
        }
        const fetchedSamples = await fetchCrops();
        this.setState({data: fetchedSamples})
    }


    render() {
        const view = (
            <div>
                
                <Button variant="outlined">
                    Send
                </Button>
                <br />
                <br />
                <StickyHeadTable data={this.state.data} />
            </div>
        )
        return (
            <Layout component={view} title={`Samples list`}></Layout>
        )
    }
}

export default List;
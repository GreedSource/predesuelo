import React, { Component } from 'react';
import Layout from '../Layout';
import Cookies from 'universal-cookie'
import {fetchCrops} from '../../api/samples'
import StickyHeadTable from './tb'
import SimpleModal from './modal'
const cookie = new Cookies()


export default class List extends Component {
    state = {
        data: [],
        datos: null,
        crop: null
    }

    handleChange = async (_crop) => {
        await this.setState({crop: _crop})
        //console.log(this.state)
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
                <SimpleModal handleChange={this.handleChange} />
                <StickyHeadTable data={this.state.data} />
            </div>
        )
        return (
            <Layout component={view} title={`Samples list`}></Layout>
        )
    }
}

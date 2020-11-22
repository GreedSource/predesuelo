import React, { Component } from 'react';
import Layout from './Layout';
import Cookies from 'universal-cookie'
import styles from '../App.modules.css'
import { fetchCrops } from '../api/samples'
import {CropPicker, CropChart} from '../components'
const cookie = new Cookies()

export class Dashboard extends Component {
    
    state = {
        data: [],
        datos: null
    }

    async componentDidMount() {
        if (!cookie.get('id')){
            window.location.href = './'
        }
        const fetchedCrops = await fetchCrops();
        this.setState({data: fetchedCrops})

    }

    handleCropChange = async (_id) => {
        this.setState({datos: this.state.data.find(crop => crop._id === _id)})
    }

    render() {
        const view = (
            <div className={styles.container}>
                <CropPicker handleCropChange={this.handleCropChange}/>
                <CropChart data={this.state.datos} />
            </div>
        )
        return (
            <Layout component={view} title={this.props.title}></Layout>
        )
    }
}

export default Dashboard;
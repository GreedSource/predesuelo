import React, { Component } from 'react';
import Cookies from 'universal-cookie'
import styles from '../App.modules.css'
import { fetchSamples } from '../api/samples'
import {CropPicker, CropChart} from '../components'
const cookie = new Cookies()

export class Dashboard extends Component {
    
    state = {
        data: [],
        datos: {
            doughnut: null,
            bars: null
        },
        doughnut: null
    }

    async componentDidMount() {
        if (!cookie.get('id')){
            window.location.href = './'
        }
        const fetchedCrops = await fetchSamples();
        this.setState({data: fetchedCrops})
        this.handleCropDoughnut()
    }

    handleCropChange = async (_id) => {
        await this.setState({ datos: { ...this.state.datos, bars: this.state.data.find(crop => crop._id === _id)} });
    }

    handleCropDoughnut = async () => 
    {
        var matriz = {};
        this.state.data.forEach((row) => { 
            var name = row.crop.name;
            matriz[name] = matriz[name] ? (matriz[name] + 1) : 1;
        });
        await this.setState({ datos: { ...this.state.datos, doughnut: matriz} });
        //console.log(this.state.datos)
    }

    render() {
        return (
            <div className={styles.container}>
                <CropPicker handleCropChange={this.handleCropChange}/>
                <CropChart data={this.state.datos} />
            </div>
        )
    }
}

export default Dashboard;
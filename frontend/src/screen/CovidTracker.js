import React, { Component } from 'react';
import Layout from './Layout';
import {Cards, Chart, CountryPicker} from '../components'
import styles from '../App.modules.css'
import {fetchData} from '../api'
import coronaImage from '../images/covid19.png'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export class CovidTracker extends Component {
    
    state = {
        data: {},
        country: ''
    }
    
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) => {
        if (cookies.get('id')){
            window.location.href = './dashboard'
        }
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country})
    }
    render() {
        const {data, country} = this.state;
        const covid_tracker = (
            <div className={styles.container}>
                <img src={coronaImage} className="image" alt="covid19" />
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
         
        return (
            <Layout component={covid_tracker} title={this.props.title} />
        )
    }
}

export default CovidTracker;
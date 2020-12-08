import React, { Component } from 'react';
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
        if (!cookies.get('id')){
            window.location.href = './'
        }
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country})
    }
    render() {
        const {data, country} = this.state;
        return (
            <div>
                <h1 className="page-header">CovidTracker</h1>
                <div className="row">
                    <div className="col-md-12">
                        <div className={styles.container}>
                            <img src={coronaImage} className="image" alt="covid19" />
                            <Cards data={data}/>
                            <CountryPicker handleCountryChange={this.handleCountryChange} />
                            <Chart data={data} country={country} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CovidTracker;
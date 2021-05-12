import React from 'react';

import SiteNavigation from '../../components/SiteNavigation';
import Weather from '../../components/weatherAPI';

// API call: api.openweathermap.org/data/2.5/weather?q=London,uk
const API_key = "2e044b70ca3ee8db8bc21f062008028e";

class homeContainer extends React.Component {
    constructor() {
        super();
        this.state={
            city: undefined,
            country: undefined,
            main: undefined,
            temp: undefined,
            description: "",
            error: false
        };
        this.getWeather();

    };

    calculateCelcius(temp){
        let cell = Math.floor(temp-273,15);
        return cell;
    };

    getWeather = async() => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Oslo,no&lang=no&appid=${API_key}`);

        const response = await api_call.json();

        console.log(response)

        this.setState({
            city: response.name,
            country: response.sys.country,
            temp: this.calculateCelcius(response.main.temp),
            description: response.weather[0].description,
        });
    };

    render() {
        return(
            <>
                <SiteNavigation />
                <h1>Velkommen!</h1>
                <h1>Dette er været nå:</h1>
                <Weather city={this.state.city} country={this.state.country} temp={this.state.temp} description={this.state.description} />
            </>
        );
    };
}

export default homeContainer;
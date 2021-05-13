import React from 'react';
import LocationInputForm from '../../components/LocationInputForm';

import SiteNavigation from '../../components/SiteNavigation';
import Weather from '../../components/weatherAPI';

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

    };

    calculateCelcius(temp){
        let cell = Math.floor(temp-273,15);
        return cell;
    };

    getWeather = async(event) => {
        event.preventDefault();

        const city=event.target.elements.city.value;
        const country=event.target.elements.country.value;

        if(city && country) {
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=no&appid=${API_key}`);

        const response = await api_call.json();

        console.log(response)

        this.setState({
            city: `${response.name}, ${response.sys.country}`,
            temp: this.calculateCelcius(response.main.temp),
            description: response.weather[0].description,
        });
        } else {
            this.setState({error:true})
        }
    };

    render() {
        return(
            <>
                <SiteNavigation />
                <h1>Velkommen!</h1>
                <h1>Se nåværende vær:</h1>
                <LocationInputForm loadweather={this.getWeather} error={this.state.error} />
                <Weather city={this.state.city} country={this.state.country} temp={this.state.temp} description={this.state.description} />
            </>
        );
    };
}

export default homeContainer;
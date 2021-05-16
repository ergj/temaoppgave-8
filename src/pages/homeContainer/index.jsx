import React from 'react';
import styled from 'styled-components';

import SiteNavigation from '../../components/GlobalComponents/SiteNavigation';
import Container from '../../components/GlobalComponents/Container';

import LocationInputForm from '../../components/HomePageComponents/LocationInputForm';
import Weather from '../../components/HomePageComponents/weatherAPI';

const API_key = "2e044b70ca3ee8db8bc21f062008028e";

const WeatherStyle = styled(Container) `
    * {
        margin: 0;
    }
    main {
        padding: 50px;
        box-sizing: border-box;
        font-weight: 600;
        max-width: 600px;
        width: 100%;
        min-height: 500px;
        box-shadow: 0 2px 6px #555;
        margin: 50px auto;
        h1 {
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 800;
        }
        form {
            width: 100%;
            font-size: 2rem;
            height: 40px;
            margin: 20px 0;
            display: flex;
            input, button {
                flex: 3;
                margin: 0 5px;
            }
            button {
                flex: 1;
                background-color: #555;
                color: white;
                letter-spacing: 2px;
                cursor: pointer;
            }
        }
    }
`

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
                <header>
                    <SiteNavigation />
                </header>
                
                <WeatherStyle>
                    <main>
                        
                            <h1>Velkommen!</h1>
                        
                            <LocationInputForm loadweather={this.getWeather} error={this.state.error} />
                            <Weather city={this.state.city} country={this.state.country} temp={this.state.temp} description={this.state.description} />
                    </main>
                </WeatherStyle>
                
            </>
        );
    };
}

export default homeContainer;
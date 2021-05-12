import React from 'react';

const Weather = (props) => {

    return(
        <div className="container">
            <div className="cards">
                <h1>{props.city}, {props.country}</h1>
                <h1>{props.temp}&deg;</h1>
                <h1>{props.description}</h1>
            </div>
        </div>
    );
}

export default Weather;
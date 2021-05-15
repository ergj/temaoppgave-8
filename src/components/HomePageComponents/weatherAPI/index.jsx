import React from 'react';

const Weather = (props) => {

    return(
        <div className="container">
            <div className="cards">
                <h1>{props.city}</h1>
                {props.temp ? (<h1>{props.temp}&deg;C</h1>):null}
                <h1>{props.description}</h1>
            </div>
        </div>
    );
}

export default Weather;
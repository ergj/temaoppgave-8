import React from 'react';

const LocationInputForm = (props) => {

    return(
        <div className="container">
            <div>{props.error ? error() :null}</div>
            <form onSubmit={props.loadweather}>
                <div>
                    <div>
                        <input type="text" name="city" autoComplete="off" placeholder="Skriv inn by" />
                    </div>

                    <div>
                        <input type="text" name="country" autoComplete="off" placeholder="Skriv inn land" />
                    </div>

                    <div>
                        <button>Se været</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

function error(){
    return(
        <div role="alert">
            Vennligst spesifiser by og land for å se været
        </div>
    )
}

export default LocationInputForm;
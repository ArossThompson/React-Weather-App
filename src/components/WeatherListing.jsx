import React from 'react';

class WeatherListing extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        if(this.props.weather !== '') {
            if(this.props.base_data.statusText === 'OK') {
                const weather = this.props.weather[0];
                return (
                    <div className="weather-listing">  
                        <p>Location: {weather.city_name} {weather.country_code}</p>
                        <p>Date and Time: {weather.datetime.split(":")[0]}</p>
                        <p>{weather.weather.description}</p>
                        <span className="weather-image">{weather.weather.icon}</span>
                        <p>Temperature: {weather.temp}</p>
                        <p>Precipitation: {weather.precip}</p>
                        <p>Wind: {weather.wind_spd}</p>
                    </div>
                )
            } else if (this.props.base_data && this.props.base_data.statusText === 'No Content') {
                return (
                    <div className="weather-listing">
                        <h1>Your search did not find any results.</h1>
                        <p>Please view the example above.</p>
                    </div>
                )
            } else {
                return null;
            }
        } else {
            return null;
        }
    }      
}

export default WeatherListing;
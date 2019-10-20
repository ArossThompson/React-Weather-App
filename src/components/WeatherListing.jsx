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
                        <p className="weather-location weather-field">Location: {weather.city_name} {weather.country_code}</p>
                        <p className="weather-date weather-field">Date: {weather.datetime.split(":")[0]}</p>
                        <p className="weather-desc weather-field">Description: {weather.weather.description}</p>
                        <img className="weather-icon weather-field" src={require(`../icons/${weather.weather.icon}.png`)} alt=""/>
                        <p className="weather-temp weather-field">Temperature: {weather.temp}°</p>
                        <p className="weather-precip weather-field">Precipitation: {weather.precip}</p>
                        <p className="weather-wind weather-field">Wind speed(kmh): {weather.wind_spd}</p>
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
        }
    }      
}

export default WeatherListing;
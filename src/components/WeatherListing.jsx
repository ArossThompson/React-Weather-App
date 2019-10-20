import React from 'react';

class WeatherListing extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        if(this.props.weather !== '') {
            if(this.props.base.statusText === 'OK') {
                const weather = this.props.weather;
                return (
                    <div className="weather-listing">
                        <div className="weather-items">
                            <p className="weather-location weather-field">Location: {weather.name}</p>
                            <p className="weather-cc weather-field">Country code: {weather.sys.country}</p>
                            <p className="weather-desc weather-field">Description: {weather.weather[0].description}</p>
                            <img className="weather-icon weather-field" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=""/>
                            <p className="weather-temp weather-field">Temperature: {weather.main.temp}°</p>
                            <p className="weather-precip weather-field">Pressure: {weather.main.pressure}</p>
                            <p className="weather-precip weather-field">Humidity: {weather.main.humidity}</p>
                            <p className="weather-wind weather-field">Wind speed(kmh): {weather.wind.speed}</p>
                        </div>  
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
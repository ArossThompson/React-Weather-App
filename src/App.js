import React from 'react';

// Styles
import './App.scss'

// Components
import Search from './components/Search'

// API
import { owm } from './api/openWeatherMap'
import WeatherListing from './components/WeatherListing';

class App extends React.Component {
  state = {
    API_key: "99ad8eeaf011aaa5fe877e2e52ff371e",
    base_data: [],
    weather: []
  }

  onSearchSubmit = async (term) =>  {
    let response;

    if(term.split(" ").length > 1) {
      response = await owm.get(`?q=${term.split(" ")[0]},${term.split(" ")[1]}&APPID=${this.state.API_key}`)
    } else {
      response = await owm.get(`?q=${term}&APPID=${this.state.API_key}`);
    }

    console.log(response);

    this.setState({ 
                    base_data: response,
                    weather: response.data
                  })
    
    console.log(this.state.weather);
  }

  render () {
    return (
      <div className="App">
        <div className="title">
          <h1 className="appHeading">React Weather App</h1>
        </div>
        <Search
          onSubmit={this.onSearchSubmit}
        />

        <WeatherListing 
          weather={this.state.weather}
          base={this.state.base_data}
        />
      </div>    
    );
  }
  
}

export default App;

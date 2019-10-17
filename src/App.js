import React from 'react';

// Styles
import './App.scss'

// Components
import Search from './components/Search'
import WeatherListing from './components/WeatherListing'

// API
import { weatherbit } from './api/weatherbit'

class App extends React.Component {
  state = {
    API_key: "2a8408dcee7d40bd990287cd34ef4740",
    base_data: [],
    weather: []
  }

  onSearchSubmit = async (term) =>  {
    let response;

    if(term.split(" ").length > 1) {
      response = await weatherbit.get(`?city=${term.split(" ")[0]}&country=${term.split(" ")[1]}&key=${this.state.API_key}`);
    } else {
      response = await weatherbit.get(`?city=${term}&key=${this.state.API_key}`);
    }

    this.setState({ 
                    base_data: response,
                    weather: response.data.data 
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
          base_data={this.state.base_data}
          weather={this.state.weather}
        />  

      </div>    
    );
  }
  
}

export default App;

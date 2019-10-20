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
    weather: [],
    resStatus: null
  }

  onSearchSubmit = async (term) =>  {
    if(term.split(" ").length > 1) {
      await owm.get(`?q=${term.split(" ")[0]},${term.split(" ")[1]}&APPID=${this.state.API_key}`).then(res => this.setState({weather:res.data, base_data:res}))
      .catch(err => err ? this.setState({resStatus:"unsuccessful"}) : null)
    } else {
      await owm.get(`?q=${term}&APPID=${this.state.API_key}`).then(res => this.setState({weather:res.data, base_data:res}))
      .catch(err => err ? this.setState({resStatus:"unsuccessful"}) : null)
    }
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
          res={this.state.resStatus}
        />
      </div>    
    );
  }
  
}

export default App;

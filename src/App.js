import React from 'react';

// Styles
import './App.scss'

// Components
import Search from './components/Search'

// API
import { weatherbit } from './api/weatherbit'

class App extends React.Component {
  state = {
    API_key: "2a8408dcee7d40bd990287cd34ef4740",
    weather: {}
  }

  onSearchSubmit = async (term) =>  {
    let response;
    if(term.split(" ").length > 1) {
      response = await weatherbit.get(`?city=${term.split(" ")[0]}&country=${term.split(" ")[1]}&key=${this.state.API_key}`)
    } else {
      response = await weatherbit.get(`?city=${term}&key=${this.state.API_key}`)
    }
    console.log(response);
  }

  render () {
    return (
      <React.Fragment>
        <div className="title">
          <h1 className="appHeading">React Weather App</h1>
        </div>
        
        <div className="App">
          <Search
            onSubmit={this.onSearchSubmit}
          />
        </div>
      </React.Fragment>
      
    );
  }
  
}

export default App;

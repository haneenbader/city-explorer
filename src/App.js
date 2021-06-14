
import React, { Component } from 'react';

import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cityName: ''
    }
  };

  updateCityNameState = (e) => {
    this.setState({
      cityName: (e.target.value)
    });
  }


  getCityData = async (e) => {
    e.preventdefault();
    const axionResponce = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.aa1e1f18e47ddfdc3b6905e918e424b6&q=${this.state.cityName}&format=json`);
    this.setState({
      cityData: axionResponce.data[0],
      displayData: true
    })
  }

  render() {
    return (
      <div>
        <h1> Enter City Explorer</h1>
        <form onSubmit={this.getCityData}>
          <label> City Name  </label>
          <input type="text" onChange={this.updateCityNameState} /> 
          <br></br>
          <button type="submit" value="git City" > Explor! </button>
        </form>
        {this.state.displayData &&
          <div>
            <p> {this.state.cityName.display_name } is located at {this.state.data.lat} by {this.state.data.lon} </p>
            {/* <img src={``} alt='' /> */}
          </div>
        }
      </div>
    )
  }
}

export default App



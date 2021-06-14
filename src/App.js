
import React, { Component } from 'react';

//  import axios from 'axios';

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
    const axionResponce = Await axios.get()
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
          <input type="text" onChange={this.updateCityNameState} > </input>
          <br> </br>
          <input type="submit" value="git City" > Explor </input>
        </form>
        {this.state.displayData &&
          <div>
            <p> {this.state.cityName.display_name}</p>
            <img src={}/>
          </div>
        }
      </div>
    )
  }
}

export default App



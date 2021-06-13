
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


getCityData = async (e)=> {
  e.preventdefault();
 
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
      </div>
    )
  }
}

export default App 



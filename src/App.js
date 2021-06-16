  
import axios from 'axios';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import './App.css'
import Weather from './component/weather'



export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      data: '',
      show: false
      weatherData : []
    }
  }

  locationEvent = (event) => {
    event.preventDefault();
    this.setState({
      location: event.target.value
    })
  }

  locationData = async (e) => {
    e.preventDefault();

    try {
      this.setState({ show: true })
      const url = `https://us1.locationiq.com/v1/search.php?key=pk.8776f995fd36c562b2158fb09706895f&q=${this.state.location}&format=json`;
      const request = await axios.get(url);
      const myApi = `${process.env.REACT_APP_URL}/weather`
      const showMyApp = await axios.get(myApi)
      this.setState({ 
        data: request.data[0] 
        weatherData : showApi.data ;
        
      })
    }
    catch (err) {
      this.setState({
        show: false
      });
    }
  }


  render() {
    if (this.state.show === true) {
      return (
        <div>
          {/* {process.env.REACT_APP_API_KEY} */}
          <h2>City Explorer</h2>
          <Form>
            <Form.Label>Where would you like to explore?</Form.Label>
            <br></br>
            <br></br>
            <Form.Control type="text" placeholder="input location here…" onChange={this.locationEvent} />
            <br></br>
            <br></br>

            <Button type="submit" onClick={this.locationData}>Explore!</Button>
          </Form>
          <p>Welcome to {this.state.data.display_name} is located at {this.state.data.lat} by {this.state.data.lon}</p>
          <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.8776f995fd36c562b2158fb09706895f&center=${this.state.data.lat},${this.state.data.lon}`} alt='' fluid />
          <Weather weatherData={this.state.weatherData}/>
        </div>
      )
    } else {
      return(
      <div>
      <h2>City Explorer</h2>
      <Form>
        <Form.Label>Where would you like to explore?</Form.Label>
        <br></br>
        <Form.Control type="text" placeholder="input location here…" onChange={this.locationEvent} />
        <br></br>
        <Button type="submit" onClick={this.locationData}>Explore!</Button>
      </Form>
     
      </div>
      )
    }
  }
}

export default App;
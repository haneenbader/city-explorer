



import axios from 'axios';
import React from 'react';
import Img from './component/Img';
import MyForm from './component/MyForm'
import Header from './component/Header';
import Footer from './component/Footer';
import './App.css'
import Weather from './component/Weather';
import Movie from './component/Movie'
import 'bootstrap/dist/css/bootstrap.min.css';



export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      data: '',
      show: false,
      errorMsg: '',

      weatherData: [],
      movieData: []



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
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.location}&format=json`;



      // const myApi = `${process.env.REACT_APP_PORT}`
      const showApi = await axios.get(url);
      console.log(showApi.data);


      const request = await axios.get(url);
      this.setState({
        data: request.data[0],

      });
      this.getWeatherData();
      this.getmovieData();

        weatherData: showApi.data
      })

    }
    catch (err) {
      this.setState({
        show: false,
        errorMsg: 'Something went wrong.'
      });
    }
  }
  getWeatherData = async () => {
    const myApi = `${process.env.REACT_APP_URL}/weather?lat=${this.state.data.lat}&lon=${this.state.data.lon}`
    const showApi = await axios.get(myApi);
    // console.log(showApi.data);

    this.setState({
      weatherData: showApi.data
    })
  }


  getmovieData = async () => {
    const myApi = `${process.env.REACT_APP_URL}/movie?query=${this.state.location}&limit=5`
    const showApi = await axios.get(myApi);
    // console.log(showApi.data);
    this.setState({
      movieData: showApi.data
    })
  }

  render() {

    // if (this.locationData){
    return (
     

      <>
        <Header />
        <div>
          <MyForm locationEvent={this.locationEvent} locationData={this.locationData} />
          {
            (this.state.show) ?
              <>
                <Img lat={this.state.data.lat} lon={this.state.data.lon} name={this.state.data.display_name} />
                <Weather weatherData={this.state.weatherData} />

                <Movie movieData={this.state.movieData} />
               


              </>
              :
              <>
                <p>{this.state.errorMsg}</p>
              </>
          }
          <Footer />
        </div>
      </>
    )
  }
}



// }

export default App;
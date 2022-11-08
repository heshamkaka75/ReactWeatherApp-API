import React, { Component } from 'react'
import Form from './components/Form';
import Weather from './components/Weather';

class App extends Component {
state = {
  temp: '',
  city: '',
  country: '',
  humidity: '',
  description: '',
  error: ''
}
  getWeather = async (e) => {
    e.preventDefault()
    const apiKey = 'f90cd87fb37668c70f62a36f4617a4ba'
    const city = e.target.elements.city.value
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2Coooooo&appid=${apiKey}`)
    const weatherData = await api.json()
    if(city) {
      this.setState({
        temp: weatherData.main.temp,
        city: weatherData.name,
        country: weatherData.sys.country,
        humidity: weatherData.main.humidity,
        description: weatherData.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        temp: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Enter city and country name...'
      })
    }
    
  }

      render() {
              return (
                <div className="App">
                <Form getWeather = {this.getWeather} />
                <Weather 
                temp = {this.state.temp}
                city = {this.state.city}
                country = {this.state.country}
                humidity = {this.state.humidity}
                description = {this.state.description}
                error = {this.state.error}
                />
                </div>
              );
      }

}

export default App;

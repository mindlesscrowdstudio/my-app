import React, { Component } from 'react';
import Select from './components/Select';
import Header from './components/Header';
import Board from './components/Board';

import './styles/index.css';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectCity: {
        city: '',
        id: ''
      },
      cityOptions: ['Buenos Aires', 'La Plata', 'Pehuajó', 'Rosario', 'Calafate'],
      cityIds: ['3435910','3432043','3841679','3838583','3858677'],
      city: undefined,
      country: undefined,
      description: undefined,
      weather:[],

    }
    this.handleSelectCity = this.handleSelectCity.bind(this);
  }
  loadWeatherFromApi = async (event) => {
    event.preventDefault();

    const ids = this.state.selectCity.id;
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${ids}&APPID=90bd42702478cae306317250a85497a4&units=metric&lang=es`;

    const callingApi = await fetch(url)

    const data = await callingApi.json();
    this.onUpdate(data);
  }
  onUpdate(data){
    this.setState(
      prevState => ({
        isSearching: true,

        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        tmin: data.main.temp_min,
        tmax: data.main.temp_max,
        description: data.weather[0].description,
        weather: data.weather[0],

      }),
      () => console.log(this.state)
    )
  }


  handleSelectCity(event)  {
    event.preventDefault();
    let value = event.target.value;
    var index = this.state.cityOptions.indexOf(value);
    this.setState (
      prevState =>({
      selectCity:{
        ...prevState.selectCity,
        city:value,
        id: this.state.cityIds[index]
      }
    }),
    () => console.log('this state:' ,this.state)
    );
  }


  render () {
    return (
      <div>

        <div className="col s12">
          <Header />
          <Select
          title={"Weather App"}
          name= {"Weather App"}
          options= {this.state.cityOptions}
          value= {this.state.selectCity.city}
          placeholder = {'selecciona una ciudad'}
          handleChange= {this.handleSelectCity}
          loadWeatherFromApi = {this.loadWeatherFromApi}

          />
        </div>

        <div className="col s12">

           <Board city= {this.state.city}
           country= {this.state.country}
           error = {this.state.error}
           description= {this.state.description}
           temperature = {this.state.temperature}
           onUpdate = {this.onUpdate}
           tmin = {this.state.tmin}
           tmax={this.state.tmax}
           humidity = {this.state.humidity}
           weather = {this.state.weather}
           isSearching = {false}
           />
        </div>
      </div>
    )
  }
}
export default App;

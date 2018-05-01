import React,{ Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from './../../constants/weather';
import './styles.css';
const location="Buenos Aires,Ar";
const api_key= "56f0f39ab3499bf4dbbd70b4a8f925a5";
const api_weather=`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;

const data1 = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10m/s'
}

class WeatherLocation extends Component {
    constructor(){
        super();
        this.state = {
            city:'Buenos Aires',
            data: data1
        }
    }
    getWeatherState = weather => {
        return SUN;
    }
    getData = (weather_data) => {
        const {humidity, temp} =weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(this.weather);
        
        const data ={
            humidity,
            temperature:temp,
            weatherState,
            wind: `${speed} m/s`
        }

        return data;
    }
    handleUdpateClick = () => {
        fetch (api_weather).then(data => {
            console.log(data);
            return data.json();
        }).then(weather_data => {
            const data=this.getData(weather_data);
            this.setState({ data });
            console.log(weather_data);

        });
        console.log('hola');
    };
    render = () => (
        <div className="weatherLocationCont">
            <Location city={this.state.city} />
            <WeatherData data={this.state.data} />
            <button onClick={this.handleUdpateClick}>Actualizar</button>
        </div>
    );
}

export default WeatherLocation;
import React,{ Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN,WINDY } from './../../constants/weather';
import './styles.css';

const data1 = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10m/s'
}
const data2 = {
    temperature: 18,
    weatherState: WINDY,
    humidity: 5,
    wind: '19m/s'
}

class WeatherLocation extends Component {
    constructor(){
        super();
        this.state = {
            city:'Buenos Aires',
            data: data1
        }
    }
    handleUdpateClick = () => {
        this.setState({
            data: data2
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
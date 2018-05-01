import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {SUN} from './../../constants/weather';
import './styles.css';
const data = {
    temperature:20,
    weatherState: SUN,
    humidity: 10,
    wind: '10m/s'
}
const WeatherLocation = () =>(
    <div className="weatherLocationCont"> 
        <Location city={'Buenos Aires'} />
        <WeatherData data= {data} />
    </div>
);

export default WeatherLocation;
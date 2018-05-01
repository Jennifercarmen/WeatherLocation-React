import React,{ Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import CircularProgress from 'material-ui/CircularProgress';
import './styles.css';

const location="Buenos Aires,Ar";
const api_key= "56f0f39ab3499bf4dbbd70b4a8f925a5";
const api_weather=`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;


class WeatherLocation extends Component {
    constructor(){
        super();
        this.state = {
            city:'Buenos Aires',
            data: null
        }
    }
  
    handleUdpateClick = () => {
        fetch (api_weather).then(data => {
            return data.json();
        }).then(weather_data => {
            const data=transformWeather(weather_data);
            this.setState({ data });
        });
    };
    
    componentWillMount() {
      this.handleUdpateClick();
    }   
    
    render = () => {
        const {city, data} =this.state;
        return(
        <div className="weatherLocationCont">
            <Location city={city} />
           { data ? <WeatherData data={data} /> : 
               <CircularProgress size={60} thickness={7} />
            }
        </div>
        )
    };
}

export default WeatherLocation;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import CircularProgress from 'material-ui/CircularProgress';
import './styles.css';

const url = "https://api.openweathermap.org/data/2.5/weather";
const api_key = "56f0f39ab3499bf4dbbd70b4a8f925a5";


class WeatherLocation extends Component {
    constructor({ city }) {
        super();
        this.state = {
            city,
            data: null
        }
    }

    componentWillMount() {
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;
        fetch(api_weather).then(data => {
            return data.json();
        }).then(weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data });
        });
    }

    render = () => {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
                <Location city={city} />
                {data === null ?
                    <CircularProgress size={60} thickness={7} /> :
                    <WeatherData data={data} />
                }
            </div>
        )
    };
}
WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationCick: PropTypes.func,
}
export default WeatherLocation;
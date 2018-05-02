import React , { Component } from 'react';
import PropTypes from 'prop-types';
import ForeCastItem from './ForeCastItem';
import transformForecast from './../services/transformForecast'

import './styles.css';

const url= "https://api.openweathermap.org/data/2.5/forecast";
const api_key= "56f0f39ab3499bf4dbbd70b4a8f925a5";


class ForecastExtended extends Component {
    constructor (){
        super();
        this.state = {
            forecastData :null 
        }
    }
    componentDidMount() {
        const {city} =this.props;
        this.updateCity(city)
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city){
            this.setState({ forecastData : null });
            this.updateCity(nextProps.city);
        }
    }
    
    updateCity = city => {
        const url_forecast=`${url}?q=${city}&appid=${api_key}&units=metric`
        fetch(url_forecast).then(
            data => (data.json())
        ).then (
            weather_data => {
                const forecastData = transformForecast (weather_data);
                this.setState ({forecastData})
            }
        )
    }
    renderForeCastItemDays (forecastData) {
        return forecastData.map (forecast => (
            <ForeCastItem 
                key={ `${forecast.weekDay}${forecast.hour}`} 
                weekDay={forecast.weekDay}
                hour={forecast.hour} 
                data={forecast.data} /> ))
    }
    renderProgress = () => {
        return <h3>Cargando Pronóstico Extendido...</h3>
    }
    render(){
        const { city } =this.props;
        const { forecastData } = this.state;
        return(
            <div>
                <h3 className="forecast-title"> Pronostico Extendido {city}</h3>
                 {forecastData=== null ?
                 this.renderProgress():
                 this.renderForeCastItemDays(forecastData)
                 }
                </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;
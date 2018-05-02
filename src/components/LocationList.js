import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({ cities, onSelectedLocation }) => {
const handleWeatherLocationClick = city => {
    console.log("handleWeatherLocationClick");
    onSelectedLocation(city);
}
// Transforma array de string en array de componentes
const strToComponent = cities => (
    cities.map(city =>
        (
            <WeatherLocation 
                key={city} 
                city={city} 
                onWeatherLocationClick={() => handleWeatherLocationClick(city)} />
        ))
);
return (
    <div>
        {strToComponent(cities)}
    </div>
)
};
LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onselectedLocation: PropTypes.func,
}

export default LocationList;
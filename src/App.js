import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import WeatherLocation from './components/WeatherLocation';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <WeatherLocation/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

import './App.css';
const cities = [
  "Lima, PE",
  "Mexico ,MX", 
  "Madrid, ES"
];
class App extends Component {
  constructor() {
    super();
    this.state = { city: null };
  }
  handleSelectedLocation = city => {
    // destructuring ecma
    this.setState({ city })
  };
  render() {
    const { city }=this.state;
    return (
      <MuiThemeProvider>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <AppBar title="Weather App" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities}
                onSelectedLocation={this.handleSelectedLocation} />
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                {
                  city === null ? 
                    <h4> No se selecciono ciudad </h4>:
                    <ForecastExtended city={city} />
                  }
                  
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;

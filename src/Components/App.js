import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import Form from "./Form";
import Weather from "./Weather";

const Api_Key = "e36ed364400282e43250b6c4c0274d44";

class App extends Component {
  state = {
    tempreature: "",
    city: "",
    country: "",
    description: "",
    humidity: "",
    error: ""
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
    );
    const data = await api.json();

    if (city && country) {
      this.setState({
        tempreature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        error: ""
      });
    }
    // else if(!data.sys.country || !data.name) {
    //   this.setState({
    //     tempreature: "",
    //     city: "unkown",
    //     country: "unkown",
    //     description: "",
    //     humidity: "",
    //     error: "Enter valid data"
    //   });
    // }
    else if (!city || !country) {
      this.setState({
        tempreature: "",
        city: "",
        country: "",
        description: "",
        humidity: "",
        error: "Enter all data"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <di className="info">
            <Form getWeather={this.getWeather} />
            <Weather
              tempreature={this.state.tempreature}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              humidity={this.state.humidity}
              error={this.state.error}
            />
          </di>
        </header>
      </div>
    );
  }
}

export default App;

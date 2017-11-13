import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {cities: []}

  async componentDidMount() {
    console.log
    const response = await fetch('/cities');
    const cities = await response.json();

    this.setState({cities: cities});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {this.state.cities.map((city) => (
            <li key={city.name}>{city.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

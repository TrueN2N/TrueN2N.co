import React, { Component } from 'react';
import logo from './images/bowtie.png';
import './App.css';

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
  }

  render() {
    const { loading } = this.state;

    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">N:N</h1>
          <h2 className="App-sub-title">Collective</h2>
        </header>
        <p className="App-intro">
        <img src={logo} className="App-logo" alt="logo" />
        </p>
      </div>
    );
  }
}

export default App;

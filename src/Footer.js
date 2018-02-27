import React, { Component } from 'react';
import logo from './images/bowtie.png';
import './App.css';
import Center from 'react-center';


class Divider extends Component {
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
      <div>
      <Center>
        <div className="footer-block">
        <tt>

        <br></br>
        <br></br>

        <Center>brought to you with love.</Center>
        <p className="App-intro">
        <Center><img src={logo} className="App-logo" alt="logo" /></Center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        </p>
        </tt>
        </div>
      </Center>
      </div>
    );
  }
}

export default Divider;

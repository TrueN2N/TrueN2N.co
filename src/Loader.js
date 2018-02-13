import React, { Component } from 'react';


class Loader extends Component {
	state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
  }

  render() {
    const { loading } = this.state;

    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
    return (
    	<div class="st-loader"><span class="equal"></span></div>
    );
    }else{
      return null; // render null when app is not ready
    }

  }
}

export default Loader;

import React, { Component } from 'react';


class Team extends Component {
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
    }else{
      return (
      <div className="App-about-container">
    	<h2 className="About-header">Team</h2>
      <p>
        N:N are rational optimists.
        <br></br>
        N:N welcomes any team member net-enhancing it’s fitness function. Competing or complementary. Let’s uncover synergies. 
        <br></br>
        We believe in mapping personal fitness functions on to collective fitness function. 
        <br></br>
        Sole collective contract:
        Do what you believe it takes to optimize the aggregate fitness function of the collective. 
        Joint sub-process: optimize your personal fitness function in relation to the domain.
      </p>
      </div>
    );
      
    }

  }
}

export default Team;

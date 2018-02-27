import React, { Component } from 'react';
import Center from 'react-center';



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
      <tt>
      <Center><h1 className="About-header"> <tt> Team </tt></h1></Center>

      <p>
        N:N are rational optimists.
        <br></br>
        N:N welcomes any team member net-enhancing it’s fitness function. Competing or complementary. Let’s uncover synergies. 
        <br></br>
        We believe in mapping personal fitness functions on to collective fitness function. 
        <br></br>
        Sole collective contract:
        Do what you believe it takes to optimize the aggregate fitness function of the collective. 
        <br></br>
        Joint sub-process: optimize your personal fitness function in relation to the domain.
        <br></br>
        <br></br>
        We have immense gratitude toward & are proud contributors to the open source ⧫ Ethereum community.
      </p>

      </tt>
      </div>
    );
      
    }

  }
}

export default Team;

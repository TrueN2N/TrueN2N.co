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
        N:N welcomes any team member net-enhancing the fitness function. Competing or complementary. Coalesce, evolve, fork, exit. 
        <br></br>
        Sole collective contract:
        Do what you believe it takes to optimize the aggregate fitness function of the collective. 
        <br></br>
        Sub-process: challenge, enhance, lead, deviate, document. As saught: signal your personal fitness function(s) & reputation.
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

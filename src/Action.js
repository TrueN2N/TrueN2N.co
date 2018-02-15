import React, { Component, Link} from 'react';
import './App.css';
import Center from 'react-center';


class Action extends Component {
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
      <div className="App-about-container">
        <Center>
          <a href='https://twitter.com/TrueN2N'><h3 className="action-header">Unlearn</h3></a>
          <a href='#team'><h3 className="action-header">Join our Collective</h3></a>
          <a href='mailto:one@truen2n.co'><h3 className="action-header" >Invest</h3></a>
        </Center>
      </div>
    );
  }
}

export default Action;

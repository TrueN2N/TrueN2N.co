import React, { Component } from 'react';
import './App.css';
import Center from 'react-center';


class About extends Component {
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
        <h1 className="About-header">About</h1>
        </Center>
        <Center>
        <p className="cypherpunk">N:N writes code, propagates talent & allocates [crypto]capital. </p>
        </Center>

        <h2 className="About-header">Domain of focus: </h2>
        <p className="cypherpunk">
        Current: Intersection of decentralized (dx) protocols & AI.
        Sub-domain: Unlocking N:N value efficiency (scale, scope etc.) in n dimensions.
        This encompasses: dx Identity. Delegating dx trust. Protocol liquidity provision. 
        Future: Acting quick where nascent whitespace of inefficiency lie. (subject to change dynamically).
        The current state of most domains = overvalued efficiency > dynamism, anti-fragility.</p>

        <h2 className="About-header">Why?</h2>
        <p className="cypherpunk">Timing. We’re in period of punctuated equilibrium.
        Current potential impact on Global state trajectory per unit time is 
        [arguably] at a local maximum. Peak actionability on trajectory-influence.</p>

        <h2 className="About-header">What is N:N?</h2>
        <p className="cypherpunk">Creating value relative to any underlying. e.g: </p>
        <p className="cypherpunk">ERC20 Token [ETH] vs. Non-Fungible Asset. [Home Equity]</p>
        <p className="cypherpunk">Debt [Collaterized Debt Position] vs. Bag [TRON]</p>

        <h2 className="About-header">What is a Collective?</h2>
        <p className="cypherpunk">Free flowing group of individuals with access to resources with a shared mission to create.</p>

        <p className="cypherpunk">Our conjecture: trajectory will be primarily be determined by:
        a) Data access/flow; Networks [hardware & wetware]. 
        b) Intelligence; AI</p>
        
        <h2 className="About-header">What?</h2>
        <p className="cypherpunk">Building is underway. Non-fungible asset networks. Distributed debt/equity/value protocols. </p>

        <h2 className="About-header">How?</h2>
        <p className="cypherpunk">
          Ground-up reasoning.
          Unlearning. (i.e iterative dynamism > static determinism).
          Building + supporting truth-seeking ventures.
          Process goals > Outcome goals.
          Keep identity ‘small’. 
          Improvised action.
        </p>

        <h2 className="About-header">Technical How?</h2>
        <p className="cypherpunk">
          The Technical How:<br />
          Automation. Modelling [compressed intelligence]. <br />
          Dynamic mechanism design [incentives/cryptoeconomics] & implementation. <br />
          Dynamic, rapidly deployed peripheral tooling. <br />
          Focus on-obvious force multipliers. <br />
          Network creation. <br />

        </p>
      </div>
    );
  }
}

export default About;

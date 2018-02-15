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
        Current: Intersection of decentralized (dx) protocols & AI. <br>
        Sub-domain: Unlocking N:N value efficiency (scale, scope etc.) in n dimensions.
        This encompasses: dx Identity. Delegating dx trust. Protocol liquidity provision. 
        Future: Acting quick where nascent whitespace of inefficiency lie. (subject to change dynamically).
        i.e. domains that value efficiency at the expense of dynamism & anti-fragility.</p>

        <h2 className="About-header">Why?</h2>
        <p className="cypherpunk">Timing. We’re in period of punctuated equilibrium.
        Current potential impact on Global state trajectory per unit time is 
        [arguably] at a local maximum. Peak actionability on trajectory-influence.</p>

        <h2 className="About-header">What&apos;s in the name N:N?</h2>  <!–– added apostrophe escpae chars. ––> 
        <p className="cypherpunk">Direct value exchange between any (n) two assets. N:N = actionable value relations between any ever-expanding n of protocol-enabled assets. <br /> 
         This marks a unique transition.  example:: </p>
        <p className="cypherpunk">D.A.O. ERC20 profit shares : previously illiquid, Non-fungible Asset. [Tokenized Home Equity]. <br>
        <p className="cypherpunk">Debt [Crypto-Collaterized Debt Position] : Bag [TRON]<br> 

        <h2 className="About-header">Collective?</h2>
        <p className="cypherpunk">Free flowing group of individuals with access to resources & a shared mission to create.</p>

        <p className="cypherpunk">Our conjecture: trajectory will be primarily be determined by:
        a) Data access/flow; Networks [hardware & wetware]. 
        b) Intelligence; AI</p>
        
        <h2 className="About-header">What?</h2>
        <p className="cypherpunk">Building is underway. N:N protocol tooling. Non-fungible asset networks. AI guided, automated resource allocation over dx protocols (i.e. relaying, dynamic order book creation).</p>

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
          The Technical How:
          Automation. Modelling [compressed intelligence]. 
          Dynamic mechanism design [incentives/cryptoeconomics] & implementation.
          Dynamic, rapidly deployed peripheral tooling.
          Focus on-obvious force multipliers. 
          Network creation.

        </p>
      </div>
    );
  }
}

export default About;

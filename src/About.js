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
          <h1 className="About-header"> <tt> About N:N </tt></h1>
          </Center>

          <Center>
          <p className="cypherpunk">N:N are entrepreneurs. We write code, propagate talent + truth, & allocate [crypto]capital. </p>

          </Center>

          <h3 className="About-header">Domain of focus: </h3>
          <p className="cypherpunk">
          Intersection of decentralized (dx) protocols & AI. <br></br>
          Sub-domain: Frictionlessly unlocking value efficiency (scale, scope etc.) in n dimensions. <br></br>
          </p>
          <br></br>

          <h3 className="About-header">What is N:N?</h3>  
          <p className="cypherpunk">N:N is a trading/market ideal. 'N-sided' protocol markets. It's direct value exchange + actionable value relations between any n protocol-enabled assets. <br></br>
          <i>Familiar examples: </i><br></br>
          &nbsp;&nbsp;Direct exchange: AAPL/USD → AAPL/ETH; iPhone/USD -> iPhone/AAPL equity <br></br>
          &nbsp;&nbsp;Derivatives: ETH/USD Futures → ETH/TokenizedUtility. ETH Call Option w/ strike price in BTC.<br></br>
          &nbsp;&nbsp;Previously illiquid, non-fungible assets: [Tokenized Land Equity]/[Tokenized Condo Equity]<br></br>
          &nbsp;&nbsp;Direct margin/futures hedging: [Crypto-Collaterized Debt Position]/[Tokenized Dividend-Reaping Asset], [Tokenized Student Loan]/[Tokenized Identity-tied Future Income] <br></br> 
          </p>
          <br></br>

          <h3 className="About-header">N:N Specs:</h3> 
          <p className="cypherpunk">
          Founded: Jan. 2018. <br></br>
          Currently: 3-4 entrepreneurs.<br></br>
          Focus: Private pre-seed & protocol markets.<br></br>
          Where? Toronto headquarters.<br></br>
          Capital: >$3M in liquid funds. <br></br>
          </p>
          <br></br>
   
          <h3 className="About-header">What does N:N collective seek to do?</h3>
          <p className="cypherpunk">
          Shift nascent N:N market state(s) toward meritocratic, value creation compounding efficiency. <br></br>
          We seek to build connectivity [pipes, tools, models/intelligence, UI] & capitalize on inefficency/illiquidity [arbitrage truth-deviation]. <br></br>
          <br></br>
          <i>State-transition/phase shift vectors of focus:</i> <br></br>
          &nbsp;&nbsp;Fundamental elements of society rearchitected natively digital (money, identify, agreements, certificates, reputation etc.) <br></br>
          &nbsp;&nbsp;{'→'} Complex & obscure n-sided protocol merit-markets manifest <br></br>
          &nbsp;&nbsp;{'→'} Application of tools & intelligence <br></br>
          &nbsp;&nbsp;{'→'} Real time truth-oriented global state changes <br></br>
          &nbsp;&nbsp;{'→'} Accellerated compounding of value creation events <br></br>
          &nbsp;&nbsp;{'='} Value creation rate spikes to new equilibria trajectory. <br></br>
          <br></br>
          Dx protocols enable global meritocracy. Meritocracy = entities have symmetric access & 'skin in the game' upside vs. downside etc. This contrasts steady-state rent seeking entities, whose dubious value will be brought to light. <br></br>
          Our supposition: we're evolving toward protocol-enabled meritocracy. And under such conditions it's dynamism & anti-fragility that confer true 1st principles value. <br></br>
          </p>
          <br></br>

          <h3 className="About-header">Collective?</h3>
          <p className="cypherpunk">Free flowing group of individuals with overlapping access to resources & a shared mission to create.</p>
          <br></br>

          <h3 className="About-header">Our conjecture:</h3>
          <p className="cypherpunk">Trajectory will be primarily be determined by: <br></br>
          &nbsp;a. Data access/flow; Networks [hardware & wetware]. <br></br>
          &nbsp;b. Intelligence; AI<br></br>
          </p>
          <br></br>
          
          <h3 className="About-header">What is N:N building?</h3>
          <p className="cypherpunk">Currently: N:N dx protocol tooling. Non-fungible asset networks (i.e. property registry, non-fungible private equity tokenization). AI guided, automated resource allocation over dx protocols (i.e. dynamic relaying/market making). Stablecoin debt tooling.<br></br>
          <br></br>
          
          <tt>Note: N:N honours absolute autonomy. No one but the builders involved determine & manage endeavour-specific disclosure. Builders recieve full credit, own IP & are encouraged to build their personal brand.</tt><br></br>
          <br></br>
          </p>

          <h3 className="About-header">High level 'How':</h3>
          <p className="cypherpunk"> 
          Ground-up reasoning. Unlearning. (i.e iterative dynamism > static determinism). Building + supporting truth-seeking ventures. <br></br>
          Process goals > Outcome goals. Keep identity ‘small’. Improvised, swift action.<br></br>
          </p>
          <br></br>

          <h3 className="About-header">Low level 'How':</h3>
          <p className="cypherpunk">
             Modelling [compressed intelligence]. Dynamic, iterative automation. Dynamic, rapidly deployed peripheral tooling. Building expediantly on cutting-edge protocol improvement proposals (i.e. state channels, ERC 821, ring signatures). Dynamic mechanism design & implementation [incentives/cryptoeconomics]. Wield non-obvious force multipliers. Network creation.<br></br>
          </p> 
          <br></br>

          <h3 className="About-header">Why?</h3> 
          <p className="cypherpunk">Timing. <br></br>
          We’re in period of punctuated equilibrium. <br></br>
          <i> "There are decades in which nothing happens and weeks in which decades happen"-V.Lenin </i><br></br>
          Current potential impact on Global state trajectory per unit time is 
          [arguably] at a local maximum. <br></br>
          At peak actionability, we're employing force-weighted multipliers/leverage, namely: <br></br>
          &nbsp;<center><tt>labour {'<'} capital {'<'} fundamental dx protocols/ai {'⊆'} code </tt> {'→'} maximal trajectory-influence. </center> <br></br>
          </p>
          <br></br>
        </div>
    );
  }
}

export default About;

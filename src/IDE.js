import React, { Component } from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';

import Center from 'react-center';


import 'brace/mode/javascript';
import 'brace/theme/monokai';

 
function onChange(newValue) {
  console.log('change',newValue);
}

class IDE extends Component {

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
      <Center>
       <AceEditor style={{display: 'flex', justifyContent: 'center'}}
  mode="javascript"
  theme="monokai"
  name="blah2"
  onLoad={this.onLoad}
  onChange={this.onChange}
  fontSize={14}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  height={'400px'}
  value={

    `
pragma solidity 0.4.19;

import "./Data.sol";
import "./Connectivity.sol";

contract Truth {
  
  string const thesis = \`The rate of building within 
  nascent whitespace increasingly lags the rate of 
  whitespace creation.\`;
  
  function modelCurrentState(_x);
  function modelEndState(_y);
  function findDeviance(_currentState, _endState);
  function evaluate(_thesis);
  function act(_N2N);
}
`

}
  setOptions={{
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: true,
  enableSnippets: false,
  showLineNumbers: true,
  tabSize: 2,
  }}/>
  </Center>
      )
    }
}

export default IDE;

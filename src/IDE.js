import React, { Component } from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';

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
  value={

    `
pragma solidity 0.4.19;

import "./Data.sol";
import "./Network.sol";

//
//
//

contract Truth {
  
  string const thesis = "
    
  ";
  
  function modelCurrentState(_x);

  function modelEndState(_y);

  function findDeviance(_currentState, _endState);
  
  function evaluate(_thesis);

  function act(N:N)

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
      )
    }
}

export default IDE;

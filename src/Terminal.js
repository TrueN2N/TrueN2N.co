import React, { Component } from 'react';
import './Terminal.css';

class Terminal extends Component {

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
        return(
            <section class="main">
                <div class="container">
                    <div class="content center">
                      <span id="wrap" class="terminal">n2nc@home: ~$ grep "truth" </span>
                        <ul>
                            <li class="post-item">
                                <span class="terminal">drwxr-xr-x+&nbsp;&nbsp;</span>
                                <span class="terminal">&nbsp;Truth.sol</span>
                                <span class="meta terminal">&nbsp;&nbsp;December 9, 2017</span>
                                {/*<a href="" class="terminal"><span>.</span></a>*/}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            )
    }
}

export default Terminal;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import IDE from './IDE';
import Loader from './Loader';
import Terminal from './Terminal';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Loader />, document.getElementById('loader'));
// ReactDOM.render(<Terminal />, document.getElementById('terminal'));
ReactDOM.render(<IDE />, document.getElementById('ide'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import bodymain from './bodymain';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App2 />, document.getElementById('root3'));
ReactDOM.render(<bodymain />, document.getElementById('root2'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

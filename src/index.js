import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Calculator from "./class1/calculator";
import Pusher from "./class1/pusher";
import Test from "./class2/async";
import Fresh from "./class3/fresh2";
import Fetcher from "./class4/fetcher";
import MyRouter from "./route/router";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Fresh />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

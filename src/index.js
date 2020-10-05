import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowSubscriber from './ShowSubscriber';
import * as serviceWorker from './serviceWorker';
import AddSubscriber from './AddSubscriber';
import PhoneDirectory from './PhoneDirectory'
import "./common/common.css"

ReactDOM.render(
  <React.StrictMode>
    <PhoneDirectory />
    {/* <AddSubscriber /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './reset';
import {Provider} from "react-redux";
import store from "./store";

ReactDOM.render(
    //Provider的包裹必须有store
    <Provider store={store}>
    <App/> 
    <GlobalStyle/>
    </Provider>
    , document.getElementById('root'));
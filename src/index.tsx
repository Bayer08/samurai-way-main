import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store,StateType} from "./Redax/State";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree=(props:StateType)=>{
    // console.log('rerenderEntireTree rendered')
    ReactDOM.render(
        <BrowserRouter>
            <App state={props}
                 dispatch={store.dispatch.bind(store)}
                 // updateProfilePagePostText={store.updateProfilePagePostText.bind(store)}
                 // addProfilePagePostText={store.addProfilePagePostText.bind(store)}
                 // updateProfilePageError={store.updateProfilePageError.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscriber(rerenderEntireTree)
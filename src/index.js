import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from "./store";
import MyComponent from "./MyComponent";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <MyComponent/>
    </Provider>
);

export function changeBackgroundColor() {
    const colorsForQuoteBackground = ['#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'];
    const randomIndex3 = Math.floor(Math.random() * colorsForQuoteBackground.length);
    const randomColorForBackground =colorsForQuoteBackground[randomIndex3];
    document.body.style.backgroundColor = randomColorForBackground;
    let text = document.getElementById('text');
    let author = document.getElementById('author');
    let buttonTweet = document.getElementById('new-tweet')
    let buttonQuote = document.getElementById('new-quote')
    text.style.color = randomColorForBackground;
    text.style.boxShadow = "4px 2px 4px 2px " + randomColorForBackground;
    author.style.color = randomColorForBackground;
    buttonTweet.style.backgroundColor = randomColorForBackground;
    buttonQuote.style.backgroundColor = randomColorForBackground;
    buttonTweet.style.boxShadow = " 0 1px 0 " + randomColorForBackground;
    buttonTweet.style.border = "1px solid " + randomColorForBackground;
    buttonQuote.style.border = "1px solid " + randomColorForBackground;
    buttonQuote.style.boxShadow = " 0 1px 0 " + randomColorForBackground;
}

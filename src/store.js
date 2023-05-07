import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import thunk from 'redux-thunk';


const store = configureStore({reducer:rootReducer , middleware:[thunk]});

fetch('https://api.quotable.io/quotes/random')
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        store.dispatch({type:'newQuote',content:data[0].content,author:data[0].author})
    })
    .catch(error=>{
        console.log('Error:',error);
    });

export default store;
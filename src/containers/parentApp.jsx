import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from '../../src/serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {BrowserRouter, Route} from "react-router-dom"

import '../../src/index.css';
import App from '../../src/components/App';
import BasketProduct from '../../src/components/BasketProduct';
import reducer from '../../src/reducers'

const store = createStore(reducer);

export default class ProductStore extends React.Component{
    render(){
        return(
        <Provider store={store}>
        <BrowserRouter>
        <Route path="/Products" component={App}/>
        <Route path="/Basket" component={BasketProduct}/>
        </BrowserRouter>
        </Provider>
        )
    }
}
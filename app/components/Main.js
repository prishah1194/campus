import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer'
import Navbar from './Navbar';


export default class Main extends Component {
    render(){
        return(
            <div>
                <Navbar/>
                <main>
                <Switch>
                <Route exact path="/" component={Header} />
                </Switch>
                </main>
                <Footer/>
                </div>
              
        )
    }
}
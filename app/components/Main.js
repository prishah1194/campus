import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer'
import Navbar from './Navbar';
import CampusList from './CampusList';


export default class Main extends Component {
    render(){
        return(
            <Router>
            <div>
                <Navbar/>
                <main>
                <Switch>
                <Route exact path="/" component={Header} />
                <Route exact path="/campuses" component={CampusList} />
                </Switch>
                </main>
                <Footer/>
                </div>
                </Router>
              
        )
    }
}
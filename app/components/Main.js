import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store.js'
import {fetchCampus} from '../reducers/campus'
import {fetchStudent,fetchOneStudent} from '../reducers/student'


import Header from './Header';
import Footer from './Footer'
import Navbar from './Navbar';

import CampusList from './CampusList';
import CampusCreate from './CampusCreate';

import StudentList from './StudentList'
import StudentCreate from './StudentCreate'

import StudentOne from './StudentOne'
import CampusOne from './CampusOne'

//import StudentUpdate from './StudentUpdate';




export default class Main extends Component {
    componentDidMount(){
    const campusThunk=fetchCampus()
    store.dispatch(campusThunk)
    const studentThunk=fetchStudent()
    store.dispatch(studentThunk)
    }
   
    render(){
        return(
            <Router>
            <div>
                <Navbar/>
                <main>
                <Switch>
                <Route exact path="/" component={Header} />
                <Route exact path="/campuses" component={CampusList} />
                <Route path="/new-campus" component={CampusCreate} />

                <Route exact path="/students" component={StudentList} />
                <Route path="/new-student" component={StudentCreate} />

                <Route path="/students/:studentId" component={StudentOne}/>
                <Route path="/campuses/:campusId" component={CampusOne}/>

                </Switch>
                </main>
                <Footer/>
                </div>
                </Router>
              
        )
    }
}
import React,{Component} from 'react'
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';


export default function Footer() {
    return (
        <div>
        <div style={{margin:"20px", marginTop:"100px"}}>
            <hr/>
            <p>Posted by: Priyanka</p>
            <p>Contact information: <a href="mailto:prishah1194@gmail.com">prishah1194@gmail.com</a></p>
            <p>Phone: <a href="tel:+1-201-595-9282">+1-201-595-9282</a></p>
            <p>&copy; 2017 Priyanka</p>        
            </div>
        </div>
    );
}
import React from 'react'
import { NavLink } from 'react-router-dom';

var navStyle={
    background:"#2e4160",
    margin:"10px",
    padding:"10px",
    color:"white",
    borderRadius:"30px",
    boxShadow:"5px 5px 5px #505359"
}
var buttonHome={
   margin:"20px",
   height:"50px",
   width:"100px",
   borderRadius:"70px",
   boxShadow:"5px 5px 5px #505359"
}


export default function Navbar(props) {
    return (
        <div>
        <nav style={navStyle}>
            <span>
            <button style={buttonHome}>
            <NavLink to="/"> HOME </NavLink>
            </button>
            </span>
            <span>
                <button style={buttonHome}>
            <NavLink to="/students"> STUDENTS </NavLink>
            </button>
            </span>
            <span>
                <button style={buttonHome}>
            <NavLink to="/campuses"> CAMPUSES </NavLink>
            </button>
            </span>
        </nav>
        </div>
    );
}

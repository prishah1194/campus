import React from 'react'
import { NavLink } from 'react-router-dom';

var navStyle={
    background:"#2e4160",
    margin:"10px",
    padding:"10px",
    color:"white",
    borderRadius:"30px",
    boxShadow:"5px 5px 5px #505359",
}
var buttonHome={
   margin:"20px",
   height:"50px",
   width:"150px",
   borderRadius:"70px",
   outline:"0",
   
}


export default function Navbar(props) {
    return (
        <div>
        <nav style={navStyle}>
            <span>
            <button style={buttonHome}>
            <NavLink to="/" style={{textDecoration: 'none'}}><h2> HOME </h2></NavLink>
            </button>
            </span>
            <span>
                <button style={buttonHome}>
            <NavLink to="/students" style={{textDecoration: 'none'}}><h2> STUDENTS</h2> </NavLink>
            </button>
            </span>
            <span>
                <button style={buttonHome}>
            <NavLink to="/campuses" style={{textDecoration: 'none'}}> <h2>CAMPUSES</h2> </NavLink>
            </button>
            </span>
        </nav>
        </div>
    );
}

import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Nav, NavItem, NavDropdown, MenuItem,Navbar, Glyphicon } from 'react-bootstrap';


var navStyle={
    background:"#393e47",
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


export default function Navbar1(props) {
    return (
        <div>
         
{/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</link>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
</link>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script> */}
{/*    
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
    
   
        </nav> */}

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
            </link>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
            </link>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
            <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <NavLink to="/" style={{textDecoration: 'none'}}>Campus Management Project</NavLink>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1}>
      <NavLink to="/" style={{textDecoration: 'none'}} eventKey={1}>
      <Glyphicon glyph="home" />
        </NavLink>
      </NavItem>

      <NavItem eventKey={2} style={{color:"white"}}>
      <NavLink to="/students" style={{textDecoration: 'none'}}>
        Students
        </NavLink>
      </NavItem>
    <NavItem eventKey={3}>
    <NavLink to="/campuses" style={{textDecoration: 'none'}}>
        Campuses
        </NavLink>
        </NavItem>
        </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
}

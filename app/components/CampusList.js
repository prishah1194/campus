import React, { Component } from 'react';
import { withRouter,NavLink } from 'react-router-dom';
import { connect } from 'react-redux'


var imgstyle={
    width:"250px",
    height:"250px",
    display:"inline"
   // margin:"20px"
}
var hstyle={
    color:"#2e4160"
}


const CampusList = (props) => {
    
    const {campuses}=props
    
    return (
        <div>
            <h1>CAMPUSES: </h1>
            <button><NavLink to="/new-campus" style={{textDecoration: 'none', color:"#2e4160"}} >Add new Campus</NavLink>
            </button>
            <div>
                {
                    campuses.map(campus =>
                        (
                            <div key={campus.id} >
                               
                                <NavLink to={`/campuses/${campus.id}`} key={campus.id} style={{textDecoration: 'none', color:"#2e4160"}} >
                                <h1 style={hstyle} >Campus: {campus.name}</h1>
                                    <img src={campus.imageURL} alt="image" style={imgstyle}/>
                                </NavLink>
                            </div>
                        ))
                }
        
            </div>

        </div>
    )
}

const mapStateToProps = function (state) {

    return {
      campuses:state.campuses
    };
  };

export default withRouter(connect(mapStateToProps)(CampusList))
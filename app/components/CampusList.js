import React, { Component } from 'react';
import { withRouter,NavLink } from 'react-router-dom';
import { connect } from 'react-redux'


var imgstyle={
    width:"250px",
    height:"250px",
}
var hstyle={
    color:"#2e4160"
}


const CampusList = (props) => {
    
    const {campuses}=props
    
    return (
        <div style={{margin:"20px"}}>
            <h1>CAMPUSES: </h1>
            
            <div>
                {
                    campuses.map(campus =>
                        (
                            <div key={campus.id} id={campus.id} style={{display: "inline-block", marginLeft: "auto", marginRight: "auto", paddingRight:"20px",paddingBottom:"2px", textAlign:"center"}} >
                               
                                <NavLink to={`/campuses/`+campus.id} key={campus.id} style={{textDecoration: 'none', color:"#2e4160"}} >
                                <h1 style={hstyle} >{campus.name}</h1>
                                    <img src={campus.imageURL} alt="image" style={imgstyle}/>
                                </NavLink>
                                
                            </div>
                        ))
                }
        
            </div>
            <br/>
            <div style={{ display:"block"}}>
            <button style={{width:"200px", height:"90px", outline:"0", borderRadius:"20px",fontSize:"20px", margin:"0 auto" }}>
                <NavLink to="/new-campus" style={{textDecoration: 'none', color:"#2e4160"}} >Add new Campus</NavLink>
            </button>
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
import React from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap'
//import { Button } from 'elemental'
//import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
//import {deleteStudent} from '../reducers/student'

function StudentList(props) {
    const { students } = props;

   
    return (
        <div style={{paddingTop:"20px", paddingBottom:"20px"}}>
        <ol>
        <h1 style={{paddingBottom:"20px",color:"#514f50",fontFamily:"Times New Roman"}}>List of Students</h1>
                      
            {
                students.map(student => {
                    return (
                        <li key={student.id} id={student.id}>
                            <NavLink to={'/students/'+student.id} style={{textDecoration: 'none', color:"#2e4160"}} key={student.id}>
                                 {student.fullName} 
                            </NavLink>
                            </li>
                    );
                })
            }
            <br/>
            <Button bsStyle="success">
            <NavLink to="/new-student" style={{textDecoration: 'none',fontSize:"15px", color:"white"}}>Create a new student entry</NavLink>
            </Button> 
        </ol>
        </div>
    );
}

const mapStateToProps = function (state) {
    return {
        students: state.students
    };
};
// const mapDispatchToState = function (dispatch) {
//     return {
// }}

export default withRouter(connect(mapStateToProps)(StudentList));
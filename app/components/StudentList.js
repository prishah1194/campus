import React from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
//import {deleteStudent} from '../reducers/student'

function StudentList(props) {
    const { students } = props;

   
    return (
        <div style={{ paddingLeft:"20px",border:"solid", width:"500px"}}>

        <ol>
        
                <h1>STUDENTS:</h1>
                           
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
                <button style={{width:"250px",height:"50px",outline:"0", borderRadius:"50px"}}>      
            <NavLink to="/new-student" style={{textDecoration: 'none',fontSize:"15px", color:"#2e4160"}}>Create a new student entry</NavLink>
            </button>
            
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
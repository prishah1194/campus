import React from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

function StudentList(props) {
    const { students } = props;
   
    return (
        <ol>
        
                <h1>Students</h1>
                           
            {

                students.map(student => {
                    return (
                
                            <NavLink to={`/students/${student.id}`} style={{textDecoration: 'none', color:"#2e4160"}} key={student.id}>
                                <li>
                                    <span>{student.fullName} </span>
                                </li>
                            </NavLink>
                            
                    );
                })
            }
            <br/>
                <button>      
            <NavLink to="/new-student">Create a new student entry</NavLink>
            </button>
            
        </ol>
    );
}

const mapStateToProps = function (state) {
    return {
        students: state.students
    };
};

export default withRouter(connect(mapStateToProps)(StudentList));
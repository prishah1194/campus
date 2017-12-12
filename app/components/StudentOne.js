import React from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink, Redirect } from 'react-router-dom';
import { deleteStudent,fetchStudent } from '../reducers/student'

function StudentOne(props) {
    const studentId = Number(props.match.params.studentId);
    const student=props.students.filter(student=>student.id===studentId)[0]
    const allCampuses = props.campuses
    const campus=allCampuses.filter(campus=>campus.id===student.campusId)[0]

   const { students, campuses,handleDelete } = props;
    //console.log(student)
    return (
        <div style={{border:"solid", paddingLeft:"10px", paddingBottom:"10px"}}>
        <div>
            <h3>Student Name: {student.fullName}</h3>
            <h5>Attending Campus: <NavLink to="/campuses">{campus.name}</NavLink></h5>
            <h5>Email: {student.email}</h5>
            <h5>GPA: {student.gpa}</h5> 
        </div>
        <NavLink to="/updateStudent/:studentId">
        <button>Update Student Information</button>
        </NavLink>
       
        <button onClick={handleDelete}>
        Delete Students
        </button> 
        
        </div>
    );
}
const mapStateToProps = function (state,ownProps) {
    return {
        students:state.students,
        campuses:state.campuses
    };
};
const mapDispatchToProps = function (dispatch, ownProps) {
    const studentId = Number(ownProps.match.params.studentId);
    return {
        handleDelete(evt) {
            evt.preventDefault();
            dispatch(deleteStudent(studentId));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentOne));


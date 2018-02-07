import React from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink, Redirect } from 'react-router-dom';
import { deleteStudent,fetchStudent } from '../reducers/student'
import { Button } from 'react-bootstrap'

function StudentOne(props) {
    const studentId = Number(props.match.params.studentId);
    const student=props.students.filter(student=>student.id===studentId)[0]
    const allCampuses = props.campuses
    const campus=allCampuses.filter(campus=>campus.id===student.campusId)[0]

   const { students, campuses,handleDelete } = props;
    //console.log(student)
    return (
        <div style={{paddingLeft:"30px", paddingTop:"20px",marginLeft:"50px",marginTop:"20px", width:"500px",color:"rgb(157,157,157)", height:"250px",backgroundColor:"#222222",fontFamily:"Times New Roman"}}>
        <div>
            {console.log(students)}
            <h3>Student Name: {student.fullName}</h3>
            <h5>Attending Campus: <NavLink to="/campuses">{campus.name}</NavLink></h5>
            <h5>Email: {student.email}</h5>
            <h5>GPA: {student.gpa}</h5> 
        </div>
        {/* <Button bsStyle="success">
            <NavLink to="/new-student" style={{textDecoration: 'none',fontSize:"15px", color:"white"}}>Create a new student entry</NavLink>
            </Button>  */}
            <Button bsStyle="success">
        <NavLink to="/updateStudent/:studentId">
        Update the Students
        {/* <button>Update Student Information</button> */}
        </NavLink>
        </Button>
       
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


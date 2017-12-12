import React from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { deleteCampus } from '../reducers/campus'

function CampusOne(props) {
   
    
    const campusId = Number(props.match.params.campusId);
    const filteredStudent=props.students.filter((student)=>student.campusId===campusId)
    const allCampuses = props.campuses
    const campus=allCampuses.filter(campus=>campus.id===campusId)[0]
    
    const { students, campuses,handleDelete} = props;
    console.log(filteredStudent)
    return (
        <div>
            <h1>hello</h1>
         <div>
             
            <h5>Attending Campus:{filteredStudent.fullName}</h5>
            <NavLink to="/students">
            {filteredStudent.map(student=>(<li key={student.id}>{student.fullName}</li>)
            )}
            </NavLink>
        </div>
        <NavLink to="/updateCampus/:campusId">
        <button>Update Campus Information</button>
        </NavLink>
        <button onClick={handleDelete}>
        Delete Student
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
    const campusId = Number(ownProps.match.params.campusId);
    console.log(campusId)
    return {
        handleDelete(evt) {
            evt.preventDefault();
            dispatch(deleteCampus(campusId));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampusOne));


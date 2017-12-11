import React from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { deleteCampus } from '../reducers/campus'

function CampusOne(props) {
   
    const { students, campuses,handleDelete} = props;

    return (
        <div>
        <div>
            <h5>Attending Campus: {students.name}</h5>
        </div>
        <NavLink to="/updateCampus/:campusId">
        <button>Update Campus Information</button>
        </NavLink>
        <button onClick={handleDelete}>
            <NavLink to='/campuses'>
        Delete Student
        </NavLink></button>
        </div>
    );
}
const mapStateToProps = function (state,ownProps) {
    const studentId = Number(ownProps.match.params.studentId);
    const student = state.students.find(student => student.id === studentId);
    const campus = state.campuses.find(campus => student.campusId === campus.id);
    return {
        students:state.students,
        campuses:state.campuses
    };
};
const mapDispatchToProps = function (dispatch, ownProps) {
    const campusId = Number(ownProps.match.params.campusId);
    return {
       
        handleDelete(evt) {
            evt.preventDefault();
            dispatch(deleteCampus(campusId));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampusOne));


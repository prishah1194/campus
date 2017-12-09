import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postStudent } from '../reducers';

function StudentCreate(props) {
    const { campuses } = props
    return (
        <form id="studentForm">
            <div>
            <div>
                <label> First Name </label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter student's first name"
                />
                </div>
                <div>
                <label> Last Name </label>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Enter student's last name"
                />
                </div>
                <div>
                <label> Email </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter student's email"
                />
                </div>
                <div>
                <label> GPA </label>
                <input
                    type="number"
                    name="gpa"
                    min="0"
                    max="4"
                    step="0.01"
                    placeholder="Enter student's GPA"
                />
                </div>
                <label>Campus Selection</label>
                <select name="campus" required="true">
                    <option value="" disabled="true" selected="selected">Select a campus</option>
                    {
                        campuses.map(campus => {
                            return (
                                <option key={campus.id} value={campus.id}>{campus.name}</option>
                            );
                        })
                    }
                </select>
            </div>
            <div>
                <button type="submit">Create student entry</button>
            </div>
        </form>
    );
}

const mapStateToProps = function (state) {
    return {
        campuses: state.campuses
    };
};

const mapDispatchToProps = function (dispatch) {

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentCreate));

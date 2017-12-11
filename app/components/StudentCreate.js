import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postNewStudent } from '../reducers/student';

function StudentCreate(props) {
    const { campuses,handleSubmit } = props
    return (
        <div style={{paddingTop:"20px", margin:"20px"}}>
        <form id="studentForm" onSubmit={handleSubmit} style={{outlineStyle:"double",width:"500px",paddingTop:"10px", paddingLeft:"20px", paddingBottom:"20px"}}>
            <div>
            <div>
                <label style={{fontFamily:"Arial",paddingRight:"10px"}}> <b> First Name </b> </label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter student's first name"
                    style={{width:"150px",height:"30px",background:"#f7f4f4",paddingLeft:"5px"}}
                />
                </div>
                <br/>
                <div>
                <label style={{fontFamily:"Arial",paddingRight:"10px"}}> <b> Last Name </b> </label>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Enter student's last name"
                    style={{width:"150px",height:"30px",background:"#f7f4f4",paddingLeft:"5px"}}
                />
                </div>
                <br/>
                <div>
                <label style={{fontFamily:"Arial",paddingRight:"10px"}}><b> Email </b> </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter student's email"
                    style={{width:"150px",height:"30px",background:"#f7f4f4",paddingLeft:"5px"}}
                />
                </div>
                <br/>
                <div>
                <label style={{fontFamily:"Arial",paddingRight:"10px"}}><b> GPA </b> </label>
                <input
                    type="number"
                    name="gpa"
                    min="0"
                    max="4"
                    step="0.01"
                    placeholder="Enter student's GPA"
                    style={{width:"150px",height:"30px",background:"#f7f4f4",paddingLeft:"5px"}}
                />
                </div>
                <br/>
                <label style={{fontFamily:"Arial",paddingRight:"10px"}}><b>Campus Selection </b></label>
                <select name="campus" required="true">
                    <option name="default" >Select a campus</option>
                    {
                        campuses.map(campus => {
                            return (
                                <option key={campus.id} value={campus.id}>{campus.name}</option>
                            );
                        })
                    }
                </select>
            </div>
            <br/>
            <div>
                <button type="submit" style={{width:"150px",height:"50px",outline:"0", borderRadius:"50px"}}>Create student entry</button>
            </div>
        </form>
        </div>
    );
}

const mapStateToProps = function (state) {
    return {
        campuses: state.campuses
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        handleSubmit(evt) {
            evt.preventDefault();
            const form = document.getElementById('studentForm');
            const campusSelect = document.getElementById('campusSelect');
            const newStudent =
                {
                    firstName: evt.target.firstName.value,
                    lastName: evt.target.lastName.value,
                    email: evt.target.email.value,
                    gpa: evt.target.gpa.value,
                    campusId: evt.target.campus.value
                };
            dispatch(postNewStudent(newStudent));
            form.reset();
        
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentCreate));

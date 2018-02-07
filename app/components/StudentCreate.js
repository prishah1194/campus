import React from 'react'
import { connect } from 'react-redux';
import { withRouter,NavLink } from 'react-router-dom';
import { postNewStudent } from '../reducers/student';
import { Button } from 'react-bootstrap'

function StudentCreate(props) {
    const { campuses,handleSubmit } = props
    return (
     <div style={{paddingTop:"20px",paddingLeft:"00px", margin:"20px"}}>
             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
            </link>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <form id="studentForm" onSubmit={handleSubmit} style={{outlineStyle:"double",backgroundColor:"#222222",width:"500px",paddingTop:"10px", paddingLeft:"20px", paddingBottom:"20px"}}>
            <div>
                <h3 style={{fontFamily:"Times New Roman",color:"rgb(157,157,157)", textAlign:"center"}}>Create a new student</h3>
            <br/><br/>
            <div>
                <label style={{fontFamily:"Times New Roman",paddingRight:"10px",color:"rgb(157,157,157)"}}> <b> First Name </b> </label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter student's first name"
                    style={{width:"200px",height:"30px",background:"#f7f4f4",paddingLeft:"5px"}}
                />
                </div>
                <br/>
                <div>
                <label style={{fontFamily:"Times New Roman",paddingRight:"10px",color:"rgb(157,157,157)"}}> <b> Last Name </b> </label>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Enter student's last name"
                    style={{width:"200px",height:"30px",background:"#f7f4f4",paddingLeft:"5px"}}
                />
                </div>
                <br/>
                <div>
                <label style={{fontFamily:"Times New Roman",paddingRight:"10px",color:"rgb(157,157,157)"}}><b> Email </b> </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter student's email"
                    style={{width:"150px",height:"30px",background:"#f7f4f4",paddingLeft:"5px"}}
                />
                </div>
                <br/>
                <div>
                <label style={{fontFamily:"Times New Roman",paddingRight:"10px",color:"rgb(157,157,157)"}}><b> GPA </b> </label>
                <input
                    type="number"
                    name="gpa"
                    min="0"
                    max="4"
                    step="0.1"
                    placeholder="Enter student's GPA"
                    style={{width:"150px",height:"30px",background:"#f7f4f4",paddingLeft:"5px"}}
                />
                </div>
                <br/>
                <label style={{fontFamily:"Times New Roman",paddingRight:"10px",color:"rgb(157,157,157)"}}><b>Campus Selection </b></label>
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
            {/* <Button bsStyle="success">
            <NavLink to="/new-student" style={{textDecoration: 'none',fontSize:"15px", color:"white"}}>Create a new student entry</NavLink>
            </Button>  */}
            
                <button type="submit" style={{width:"150px",height:"50px", boxShadow:"1px 1px #222222", color:"white", backgroundColor:"#35cc5f"}} >Create student entry
                
                </button>
                {/* style={{width:"150px",height:"50px",outline:"0", borderRadius:"50px"}} */}

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

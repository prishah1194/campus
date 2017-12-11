
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {postNewCampus} from '../reducers/campus'

function CampusCreate(props) {
    const { handleSubmit } = props;
    return (
        
        <div style={{marginTop:"40px", padding:"20px"}}>
            <form id="campusForm" onSubmit={handleSubmit} style={{outlineStyle:"double",width:"500px",paddingTop:"1px", paddingLeft:"20px", paddingBottom:"20px"}}>
                <div>
                    <h2 style={{fontFamily:"Arial"}}>Create New Campus</h2>
                    </div>
                <div>
                <label style={{fontFamily:"Arial"}}> <b>Name</b> </label>
                <input
                    type="text"
                    name="name"
                    placeholder=" Enter new-campus name"
                style={{width:"150px",height:"30px",background:"#f7f4f4"}}/>
                </div>
                <br/>
                <div>
                <label style={{fontFamily:"Arial"}}><b>Campus Image</b> </label>
                <input
                    type="url"
                    name="imageUrl"
                    placeholder=" Enter a campus image"
                    style={{width:"150px",height:"30px", background:"#f7f4f4"}}
                />
                </div>
                <br/>
                <label style={{fontFamily:"Arial"}}><b> Description</b> </label>
                <div>
                <textarea
                    type="text"
                    name="description"
                    placeholder=" Enter a description for the campus"
                    rows="5"
                    cols="50"
                    style={{background:"#f7f4f4", height:"100px"}}                    
                />
                </div>
                <br/>
                <div>
                    <button type="submit" style={{width:"150px",height:"50px", borderRadius:"50px"}}> Create campus entry </button>
                </div>
            </form>
        </div>
    )
}

const mapPropsToState = function (state) {
    return {

    };
}

const mapDispatchToState = function (dispatch) {
    return {
        handleSubmit(evt) {
            evt.preventDefault();
            const form = document.getElementById('campusForm');
            const newCampus = {
                name: evt.target.name.value,
                imageUrl: evt.target.imageUrl.value,
                description: evt.target.description.value
            };
            dispatch(postNewCampus(newCampus));
            form.reset();
        }
    };
}

export default withRouter(connect(mapPropsToState, mapDispatchToState)(CampusCreate));
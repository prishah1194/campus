
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {postCampus} from '../reducers'

function CampusCreate(props) {
    const { handleSubmit } = props;
    return (
        <div>
            <form id="campusForm" onSubmit={handleSubmit}>
                <div>
                <label> Name: </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter new-campus name"
                />
                </div>
                <div>
                <label>Campus Image: </label>
                <input
                    type="url"
                    name="imageUrl"
                    placeholder="Enter a campus image"
                />
                </div>
                
                <label> Description </label>
                <div>
                <textarea
                    type="text"
                    name="description"
                    placeholder="Enter a description for the campus"
                    rows="5"
                    cols="50"
                />
                </div>
                <div>
                    <button type="submit"> Create campus entry </button>
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
            dispatch(postNewStudent(newCampus));
            form.reset();
        }
    };
}

export default withRouter(connect(mapPropsToState, mapDispatchToState)(CampusCreate));
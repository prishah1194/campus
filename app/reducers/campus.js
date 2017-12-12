import axios from 'axios';

// ACTION TYPES
const GET_CAMPUS = 'GET_CAMPUS';
const POST_CAMPUS = 'POST_CAMPUS';
const REMOVE_CAMPUS='REMOVE_CAMPUS'
const UPDATE_CAMPUS='UPDATE_CAMPUS'
const GET_ONE_CAMPUS='GET_ONE_CAMPUS'

// ACTION CREATORS
export function getCampus (campuses) {
  const action = { type: GET_CAMPUS, campuses };
  return action;
}

export function postCampus (campus) {
  const action = { type: POST_CAMPUS, campus };
  return action;
}

export function removeCampus(campus){
    const action ={type: REMOVE_CAMPUS, campus};
    return action;
}

export function updateCampus(campus){
    const action ={type: UPDATE_CAMPUS, campus};
    return action;
}
export function getOneCampus(campus){
  const action ={type:GET_ONE_CAMPUS,campus}
  return action;
}

// THUNK CREATORS
export function fetchCampus () {
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(response => response.data)
      .then(campuses => {
        const action = getCampus(campuses);
        dispatch(action);
      });
  };
}


export function postNewCampus (campus) {
  return function thunk (dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(campus => {
        dispatch(postCampus(campus));
       // history.push(`/campus/${newCampus.id}`);
      });
  };
}

export function putCampus (campus) {
    
      return function thunk (dispatch) {
        return axios.put(`/api/campus/${campus.id}`, campus)
          .then(res => res.data)
          .then(campus => {
            dispatch(updateCampus(campus));
            //history.push(`/campus/${campus.id}`);
          });
      };
    }

    export function deleteCampus (campusId) {
        
          return function thunk (dispatch) {
            return axios.delete(`/api/campus/${campusId}`)
              .then((campusId)=>dispatch(removeCampus(campusId)))
              .catch(err=>console.log(err))
          };
        }


// export function fetchOneCampus () {
// return function thunk (dispatch) {
//   return axios.get(`/api/campus/:$campusId`)
//     .then(response => response.data)
//     .then(campus => {
//       const action = getOneCampus(campus);
//       dispatch(action);
//     });
// };
// }

// REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {

    case GET_CAMPUS:
      return action.campuses;

    case POST_CAMPUS:
      return [...state, action.campus];

    case REMOVE_CAMPUS:
    return campuses.filter(campus=>campus.id!==action.campusId)

  case UPDATE_CAMPUS:
  return campuses.map(campus=>(campus.id===action.updateCampus.id))
    
    // case GET_ONE_CAMPUS:
    // return action.campuses

    default:
      return state;
  }

}
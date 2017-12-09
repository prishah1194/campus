import axios from 'axios';

// ACTION TYPES
const GET_CAMPUS = 'GET_CAMPUS';
const POST_CAMPUS = 'POST_CAMPUS';
const REMOVE_CAMPUS='REMOVE_CAMPUS'
const UPDATE_CAMPUS='UPDATE_CAMPUS'

// ACTION CREATORS
export function getCampus (campuses) {
  const action = { type: GET_CAMPUS, campuses };
  return action;
}

// export function postCampus (campus) {
//   const action = { type: POST_CAMPUS, campus };
//   return action;
// }

// export function removeCampus(campus){
//     const action ={type: REMOVE_CAMPUS, campus};
//     return action;
// }

// export function updateCampus(campus){
//     const action ={type: UPDATE_CAMPUS, campus};
//     return action;
// }

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


// export function postNewCampus (campus) {

//   return function thunk (dispatch) {
//     return axios.post('/api/campuses', campus)
//       .then(res => res.data)
//       .then(campus => {
//         dispatch(postCampus(campus));
//        // history.push(`/campus/${newCampus.id}`);
//       });
//   };
// }

// export function putCampus (campus) {
    
//       return function thunk (dispatch) {
//         return axios.put('/api/campus', campus)
//           .then(res => res.data)
//           .then(campus => {
//             dispatch(updateCampus(campus));
//             //history.push(`/campus/${campus.id}`);
//           });
//       };
//     }

//     export function deleteCampus (campus) {
        
//           return function thunk (dispatch) {
//             return axios.delete('/api/campus', campus)
//               .then(res => res.data)
//               .then(campus => {
//                 dispatch(removeCampus(campus));
//               });
//           };
//         }

// REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {

    case GET_CAMPUS:
      return action.campuses;

  //   case POST_CAMPUS:
  //     return [...state, action.campus];

  //   case REMOVE_CAMPUS:
  //   return action.campus;

  // case UPDATE_CAMPUS:
  //   return [...state, action.campus];

    default:
      return state;
  }

}
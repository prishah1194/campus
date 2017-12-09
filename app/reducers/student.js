import axios from 'axios';

// ACTION TYPES
const GET_STUDENT = 'GET_STUDENT';
const POST_STUDENT = 'POST_STUDENT';
const REMOVE_STUDENT='REMOVE_STUDENT'
const UPDATE_STUDENT='UPDATE_STUDENT'

// ACTION CREATORS
export function getStudent (students) {
  const action = { type: GET_STUDENT, students };
  return action;
}

// export function postStudent (student) {
//   const action = { type: POST_STUDENT, student };
//   return action;
// }

// export function removeStudent(student){
//     const action ={type: REMOVE_STUDENT, student};
//     return action;
// }

// export function updateStudent(student){
//     const action ={type: UPDATE_STUDENT, student};
//     return action;
// }

// THUNK CREATORS
export function fetchStudent () {

  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(response => response.data)
      .then(students => {
        const action = getStudent(students);
        dispatch(action);
      });
  };
}


// export function postNewStudent (student) {

//   return function thunk (dispatch) {
//     return axios.post('/api/student', student)
//       .then(res => res.data)
//       .then(student => {
//         dispatch(postStudent(student));
    
//       });
//   };
// }

// export function putStudent (student) {
    
//       return function thunk (dispatch) {
//         return axios.put('/api/student', student)
//           .then(res => res.data)
//           .then(student => {
//             dispatch(updateStudent(student));
      
//           });
//       };
//     }

//     export function deleteStudent (student) {
        
//           return function thunk (dispatch) {
//             return axios.delete('/api/student', student)
//               .then(res => res.data)
//               .then(campus => {
//                 dispatch(removeStudent(student));
//               });
//           };
//         }

// REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {

    case GET_STUDENT:
      return action.students;

  //   case POST_STUDENT:
  //     return [...state, action.student];

  //   case REMOVE_STUDENT:
  //   return action.student;

  // case UPDATE_STUDENT:
  //   return [...state, action.student];

    default:
      return state;
  }

}
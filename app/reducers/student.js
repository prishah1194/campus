import axios from 'axios';

// ACTION TYPES
const GET_STUDENT = 'GET_STUDENT';
const POST_STUDENT = 'POST_STUDENT';
const REMOVE_STUDENT='REMOVE_STUDENT';
const UPDATE_STUDENT='UPDATE_STUDENT';
//const GET_ONE_STUDENT='GET_ONE_STUDENT';

// ACTION CREATORS
export function getStudent (students) {
  const action = { type: GET_STUDENT, students };
  return action;
}

export function postStudent (students) {
  const action = { type: POST_STUDENT, students };
  return action;
}

export function removeStudent(id){
    const action ={type: REMOVE_STUDENT, id};
    return action;
}

export function updateStudent(students){
    const action ={type: UPDATE_STUDENT, students};
    return action;
}

// export function getOneStudent (students) {
//   const action = { type: GET_ONE_STUDENT, students };
//   return action;
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

export function postNewStudent (student) {
  return function thunk (dispatch) {
    return axios.post('/api/students', student)
      .then(response => response.data)
      .then(students => {
        dispatch(postStudent(students));
    
      });
  };
}

export function putStudent (student) {
      return function thunk (dispatch) {
        return axios.put(`/api/student/${student.id}`, student)
          .then(response => response.data)
          .then(students => {
            dispatch(updateStudent(students));
          });
      };
    }
    export function deleteStudent (studentId) {
      return function thunk (dispatch) {
        return axios.delete(`/api/students/${studentId}`)
         // .then((studentId)=> dispatch(removeStudent(studentId)))
          .then((student)=> dispatch(getStudent(student)))
      };
    }

// export function fetchOneStudent () {
  
//     return function thunk (dispatch) {
//       return axios.get(`/api/students/:$studentId`)
//         .then(response => response.data)
//         .then(student => {
//           const action = getOneStudent(student);
//           dispatch(action);
//         });
//     };
//   }
  


// REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {

    case GET_STUDENT:
      return action.students;

    case POST_STUDENT:
      return [...state, action.students];

    // case REMOVE_STUDENT:
    // return action.students

    case UPDATE_STUDENT:
    return students.map(student=>(student.id===action.updateStudent.id))
    
    // case GET_ONE_STUDENT:
    // return action.students
    
    default:
      return state;
  }

}
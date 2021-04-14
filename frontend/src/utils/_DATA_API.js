import {
    RECEIVE_USERS_FAIL,
  } from "../actions/users";

const api = 'https://jsonplaceholder.typicode.com';


export function _getAllUsers(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            fetch(`${api}/users`)
            .then(response => res(response.json()));
        }, 80);   
    });
    
}



// let timeout = new Promise((resolve, reject) => {
//     setTimeout(reject, 300, 'request timed out');
// });

// let request = fetch(`${api}/users`)
//     .then(response => response.json())
//     .catch(err => dispatch({type: RECEIVE_USERS_FAIL, payload: err}));

// return Promise 
//     .race([timeout, request])
//     .catch(err => dispatch({type: RECEIVE_USERS_FAIL, payload: err}));

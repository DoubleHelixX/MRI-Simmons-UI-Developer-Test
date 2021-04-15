import { url } from "./_Constants";

export function _getAllUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      fetch(`${url}/users`).then((response) => res(response.json()));
    }, 20);
  });
}

export function getComments(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      fetch(`${url}/comments?postId=${id}`).then((response) =>
        res(response.json())
      );
    }, 20);
  });
}

export function getUserPosts(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      fetch(`${url}/posts?userId=${id}`).then((response) =>
        res(response.json())
      );
    }, 20);
  });
}

//! Future implementation for Error dispatch //
// let timeout = new Promise((resolve, reject) => {
//     setTimeout(reject, 300, 'request timed out');
// });

// let request = fetch(`${url}/users`)
//     .then(response => response.json())

// return Promise
//     .race([timeout, request])
//     .catch(err => dispatch({type: RECEIVE_USERS_FAIL, payload: err}));

import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USERS_FAIL = "RECEIVE_USERS_FAIL";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    payload: users,
  };
}



// export function handleAddUser(id, username, img) {
//   return (dispatch, getState) => {
//     dispatch(showLoading());

//     return _saveUser({
//       id,
//       username,
//       img,
//     })
//       .catch((e) => {
//         console.warn("Error in saving user: ", e);
//         // dispatch(toggleTweet(info))
//         // alert('The was an error liking the tweet. Try again.')
//       })
//       .then(({ users }) => {
//         dispatch(addUser(users));
//       })
//       .then(() => dispatch(hideLoading()));
//   };
// }

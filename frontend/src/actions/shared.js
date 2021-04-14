import { _getAllUsers} from "../utils/_DATA";
import { receiveUsers } from "../actions/users";
// import { receiveQuestions } from "../actions/questions";
import {
  RECEIVE_USERS_FAIL,
} from "../actions/users";

import { showLoading, hideLoading } from "react-redux-loading";

// const AUTHED_ID = null;
//tylermcginnis

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return _getAllUsers()
    .then((users) => {
      dispatch(receiveUsers(users));
      dispatch(hideLoading());
    })
    .catch((err) => dispatch ({type: RECEIVE_USERS_FAIL, payload: err}));   
  }
}


// const _getAllUsers = () =>
//     fetch(`${api}/users`)
//     .then(response => response.json());

// setState(prevState => {
      //   return {...prevState, users: json };
      // });
import { _getAllUsers} from "../utils/_DATA";
// import { receiveUsers } from "../actions/users";
// import { receiveQuestions } from "../actions/questions";

import { showLoading, hideLoading } from "react-redux-loading";

// const AUTHED_ID = null;
//tylermcginnis

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return _getAllUsers()
    .then((json) => {
      setState(prevState => {
        return {...prevState, users: json };
      });
    });   
  }
}


// const _getAllUsers = () =>
//     fetch(`${api}/users`)
//     .then(response => response.json());
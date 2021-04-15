
import { showLoading, hideLoading } from "react-redux-loading";

import { _getAllUsers } from "../utils/_DATA_API";

import { receiveUsers } from "../actions/users";
import { receiveCount } from "../actions/count";
import { receiveAuthor } from "../actions/author";
import { receivePosts } from "../actions/posts";
import { receiveAdditionalViews } from "../actions/additionalViews";
import { RECEIVE_USERS_FAIL } from "../actions/users";


export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(receiveCount());
    dispatch(receiveAuthor());
    dispatch(receivePosts());
    dispatch(receiveAdditionalViews());

    return _getAllUsers()
      .then((users) => {
        dispatch(receiveUsers(users));
        dispatch(hideLoading());
      })
      .catch((err) => dispatch({ type: RECEIVE_USERS_FAIL, payload: err }));
  };
}

import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USERS_FAIL = "RECEIVE_USERS_FAIL";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    payload: users,
  };
}

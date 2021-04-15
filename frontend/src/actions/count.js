import { showLoading, hideLoading } from "react-redux-loading";

export const RECIEVE_COUNT = "RECIEVE_COUNT";
export const UPDATE_COUNT = "UPDATE_COUNT";

export function receiveCount(count = "") {
  return {
    type: RECIEVE_COUNT,
    payload: count,
  };
}

export function updateCount(count) {
  return {
    type: UPDATE_COUNT,
    payload: count,
  };
}

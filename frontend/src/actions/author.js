import { showLoading, hideLoading } from "react-redux-loading";

export const RECIEVE_AUTHOR = "RECIEVE_AUTHOR";
export const UPDATE_AUTHOR = "UPDATE_AUTHOR";


export function receiveAuthor(author='') {
  return {
    type: RECIEVE_AUTHOR,
    payload: author,
  };
}

export function updateAuthor(author) {
  return {
    type: UPDATE_AUTHOR,
    payload: author,
  };
}



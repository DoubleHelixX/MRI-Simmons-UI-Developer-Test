import { showLoading, hideLoading } from "react-redux-loading";

export const RECIEVE_POSTS = "RECIEVE_POSTS";
export const UPDATE_POSTS = "UPDATE_POSTS";

export function receivePosts(posts = []) {
  return {
    type: RECIEVE_POSTS,
    payload: posts,
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    payload: posts,
  };
}

import { RECIEVE_POSTS, UPDATE_POSTS } from "../actions/posts";

export default function posts(state = {}, action) {
  let type = action.type;
  let payload = action.payload;
  switch (type) {
    case RECIEVE_POSTS: {
      return {
        ...state,
        ...payload,
      };
    }
    //MAKE ERROR REDUCER
    case UPDATE_POSTS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}

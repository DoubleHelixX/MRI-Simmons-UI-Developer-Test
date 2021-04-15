import { RECIEVE_AUTHOR, UPDATE_AUTHOR } from "../actions/author";

export default function author(state = {}, action) {
  let type = action.type;
  let payload = action.payload;
  switch (type) {
    case RECIEVE_AUTHOR: {
      return payload;
    }
    //MAKE ERROR REDUCER
    case UPDATE_AUTHOR:
      return payload;
    default:
      return state;
  }
}

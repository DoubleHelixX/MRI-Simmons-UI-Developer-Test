import { RECEIVE_USERS, RECEIVE_USERS_FAIL } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    //MAKE ERROR REDUCER
    case RECEIVE_USERS_FAIL:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

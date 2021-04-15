import { RECIEVE_COUNT, UPDATE_COUNT } from "../actions/count";

export default function count(state = {}, action) {
  let type = action.type;
  let payload = action.payload;
  switch (type) {
    case RECIEVE_COUNT: {
      return payload;
    }
    //MAKE ERROR REDUCER
    case UPDATE_COUNT:
      return payload;
    default:
      return state;
  }
}

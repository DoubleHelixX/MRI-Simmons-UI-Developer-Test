import {
  RECIEVE_ADDITIONAL_VIEWS,
  RESET_ADDITIONAL_VIEWS,
  INCREMENT_ADDITIONAL_VIEWS,
} from "../actions/additionalViews";

export default function additionalViews(state = {}, action) {
  let type = action.type;
  let payload = action.payload;
  switch (type) {
    case RECIEVE_ADDITIONAL_VIEWS:
      return payload;

    case RESET_ADDITIONAL_VIEWS:
      return payload;

    case INCREMENT_ADDITIONAL_VIEWS:
      return payload;

    //MAKE ERROR REDUCER

    default:
      return state;
  }
}

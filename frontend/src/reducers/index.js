import { combineReducers } from "redux";
import users from "./users";
import count from "./count";
import author from "./author";
import posts from "./posts";
import additionalViews from "./additionalViews";

import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  users,
  count,
  author,
  posts,
  additionalViews,
  loadingBar: loadingBarReducer,
});

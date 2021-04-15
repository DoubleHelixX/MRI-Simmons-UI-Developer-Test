import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "react-redux-loading";

import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

import { getUserPosts, getComments } from "../utils/_DATA_API";
import { useStyles, contextTheme } from "../utils/_Constants";

import { updatePosts } from "../actions/posts";
import { updateAuthor } from "../actions/author";
import { updateCount } from "../actions/count";
import { resetAdditionalViews } from "../actions/additionalViews";

export default function DropdownBtns() {
  const dispatch = useDispatch();
  const { users, count, author } = useSelector((state) => ({
    users: state.users,
    count: state.count,
    author: state.author,
  }));
  const classes = useStyles();
  const dropdownType = React.useContext(contextTheme);

  const handleDropdown = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (value.trim()) {
      if (name === "author") {
        let posts = "";
        let userId = "";
        let foundUserIndex = "";
        foundUserIndex = Object.keys(users).filter((x, i) => {
          return users[i].id == value;
        });
        if (foundUserIndex.length) {
          userId = users[foundUserIndex[0]].id;
          getUserPosts(userId)
            .then((json) => {
              posts = json;
              return posts.map((x, i) =>
                getComments(posts[i].id).then((json) => {
                  posts[i].totalComments = json.length;
                })
              );
            })
            .then(() => {
              // dispatch(showLoading());
              setTimeout(() => {
                dispatch(updatePosts(posts));
                dispatch(resetAdditionalViews(0));
                dispatch(updateAuthor(parseInt(value)));
                // dispatch(hideLoading());
              }, 200);
            });
        }
      } else if (name === "count") {
        // dispatch(showLoading());
        dispatch(resetAdditionalViews(0));
        dispatch(updateCount(parseInt(value)));
        // dispatch(hideLoading());
      }
    } else {
      name === "author"
        ? dispatch(updateAuthor(""))
        : dispatch(updateCount(""));
    }
  };

  return (
    <React.Fragment>
      {dropdownType === "author" && (
        <Grid item xs={6}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Author</InputLabel>
            <Select
              native
              value={author}
              onChange={handleDropdown}
              label="Author"
              inputProps={{
                name: "author",
                id: "outlined-author-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              {users &&
                Object.keys(users).map((x, i) => (
                  <option value={users[i].id} key={users[i].id}>
                    {users[i].name}
                  </option>
                ))}
            </Select>
          </FormControl>
        </Grid>
      )}

      {dropdownType === "count" && (
        <Grid item xs={6}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Count</InputLabel>
            <Select
              native
              value={count}
              onChange={handleDropdown}
              label="Count"
              inputProps={{
                name: "count",
                id: "outlined-count-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={2}>2</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
            </Select>
          </FormControl>
        </Grid>
      )}
    </React.Fragment>
  );
}

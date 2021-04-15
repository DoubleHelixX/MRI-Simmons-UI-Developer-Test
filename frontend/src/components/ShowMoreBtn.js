import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { incrementAdditionalViews } from "../actions/additionalViews";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { useStyles } from "../utils/_Constants";

export default function ShowMoreBtn() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { posts, count, author, additionalViews } = useSelector((state) => ({
    posts: state.posts,
    count: state.count,
    author: state.author,
    additionalViews: state.additionalViews,
  }));

  const showMore = (event) => {
    event.preventDefault();
    dispatch(incrementAdditionalViews(additionalViews + 2));
  };

  return (
    <Grid item xs={12}>
      {count &&
      author &&
      count + additionalViews < Object.keys(posts).length ? (
        <Button
          variant="outlined"
          color="primary"
          onClick={showMore}
          className={classes.showMoreBtn}
        >
          SHOW MORE
        </Button>
      ) : (
        <Button
          variant="outlined"
          color="primary"
          className={classes.showMoreBtn}
          disabled
        >
          SHOW MORE
        </Button>
      )}
    </Grid>
  );
}

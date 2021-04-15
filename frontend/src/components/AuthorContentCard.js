import React from "react";
import { useSelector } from "react-redux";

import { useStyles } from "../utils/_Constants";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import CommentIcon from "@material-ui/icons/Comment";

export default function AuthorContentCard() {
  const { posts, count, author, additionalViews } = useSelector((state) => ({
    posts: state.posts,
    count: state.count,
    author: state.author,
    additionalViews: state.additionalViews,
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      {count > 0 &&
        author &&
        Object.keys(posts).length > 0 &&
        [
          ...Array(
            count + additionalViews > Object.keys(posts).length
              ? Object.keys(posts).length
              : count + additionalViews
          ),
        ].map((e, i) => (
          <Grid item xs={12} key={posts[i].id}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  {posts[i].title}
                </Typography>
                <Typography variant="body1" component="p">
                  {posts[i].body}
                </Typography>
              </CardContent>
              <CardActions>
                {posts[i].totalComments && (
                  <Badge badgeContent={posts[i].totalComments} color="primary">
                    <CommentIcon />
                  </Badge>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
    </React.Fragment>
  );
}

import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default function AuthorContentCard() {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1
        }
      }));
    
      const classes = useStyles();

    return (
        <Grid item xs={12} 
        // key={state.posts[i].id}
        > 
            <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                {/* {state.posts[i].title} */}
                </Typography>
                <Typography variant="body1" component="p">
                {/* {state.posts[i].body} */}
                </Typography>
            </CardContent>
            <CardActions> 
                {/* {state.posts[i].totalComments &&(  
                <Badge badgeContent={state.posts[i].totalComments} color="primary">
                <CommentIcon/>
                </Badge>
                )} */}
            </CardActions>
            </Card>
        </Grid>
    )


}




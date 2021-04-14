import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import CommentIcon from '@material-ui/icons/Comment';
import DropdownBtns from "./DropdownBtns";


function App() {
  const api = 'https://jsonplaceholder.typicode.com';
  const [state, setState] = useState({
    author: "",
    count: 0,
    name: "",
    posts: [],
    comments: "",
    users: "",
    additionalViews: 0
  });

  useEffect(() => {
    const getAllUsers = () =>
    fetch(`${api}/users`)
    .then(response => response.json());

    getAllUsers()
    .then((json) => {
      setState(prevState => {
        return {...prevState, users: json };
      });
    });   
  }, []);


  const getComments = (id) =>
    fetch(`${api}/comments?postId=${id}`)
    .then(response => response.json());


  const getUserPosts = (id) =>
    fetch(`${api}/posts?userId=${id}`)
    .then(response => response.json());

  

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    gridContainer: {
      margin: 5,
      // border: '1px solid red',
      width: "auto!important"
    },

    formControl: {
      width: "100%"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    showMoreBtn: {
      width: "100%",
      textAlign: "center",
      fontWeight: "bold"
      
    }
  }));

  const classes = useStyles();

  
  const showMore = (event) => {
    event.preventDefault();
    setState(prevState => {
      return {...prevState, additionalViews: (prevState.additionalViews + 2) };
    });

  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (value){
      if (name === 'author'){ 
        let posts = "";
        state.users.map((x,i) => {
          if (state.users[i].id == value){
            return getUserPosts(state.users[i].id)
              .then((json) => {
                posts = json;
                return posts.map((x,i) => 
                  getComments(posts[i].id)
                  .then((json) => {
                    posts[i].totalComments = json.length;
                  })
                );
              })
              .then(() => {
                setTimeout(() =>{ 
                  setState(prevState => {
                    return {
                      ...prevState, 
                      [name]:parseInt(value),
                      author: value,
                      posts : posts,
                      additionalViews: 0 
                    };
                  });
                }, 80);
              });
          }
          return '';
      }); 
    }
        
    else if (name ==='count')
      setState({
        ...state,
        [name]:parseInt(value),
        additionalViews: 0
      });
    }
    else{
      setState(prevState => {
        return {
          ...prevState, 
          [name]:value
        };
      });
    }
  };


  return (
    <div>
      <Grid container spacing={3} className={classes.gridContainer}> 
        <DropdownBtns />
        
        {(state.count > 0 && state.author && state.posts.length > 0 ) && 
        ([...Array(
          (state.count + state.additionalViews) > state.posts.length 
          ? 
          state.posts.length 
          : 
          (state.count + state.additionalViews))].map((e, i) => ( 
            <Grid item xs={12} key={state.posts[i].id}> {/* Author-Content-card */}
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {state.posts[i].title}
                  </Typography>
                  <Typography variant="body1" component="p">
                  {state.posts[i].body}
                  </Typography>
                </CardContent>
                <CardActions> {/* AuthorComments */}
                  {state.posts[i].totalComments &&(  
                  <Badge badgeContent={state.posts[i].totalComments} color="primary">
                    <CommentIcon/>
                  </Badge>
                  )}
                </CardActions>
              </Card>
            </Grid>
            )))}

        <Grid item xs={12}> {/* Author-ShowMoreBtn */}
          {(state.count && state.author ) && ((state.count + state.additionalViews ) < state.posts.length) ? (
            <Button variant="outlined" color="primary" onClick= {showMore} className={classes.showMoreBtn}>
                    SHOW MORE
            </Button>
          ):
          (
            <Button variant="outlined" color="primary" className={classes.showMoreBtn} disabled>
                  SHOW MORE
            </Button>
          )
          }
        </Grid>
      </Grid>
    </div>
  );
}


export default App;

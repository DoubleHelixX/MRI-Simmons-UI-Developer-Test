import './App.css';
import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import CommentIcon from '@material-ui/icons/Comment';


function App() {
  const api = 'https://jsonplaceholder.typicode.com';
  const [state, setState] = useState({
    author: "",
    count: "",
    name: "",
    all_posts: "",
    post: [],
    comments: ""
  });

  useEffect(() => {
    const getAllPosts = () =>
    fetch(`${api}/posts`)
    .then(response => response.json());

    getAllPosts()
    .then((json) => {
      console.log("json");
      setState(prevState => {
        return {...prevState, all_posts: json };
      });
    });   

  }, []);
  console.log('after state inserted', state.all_posts);

  const getComments = (id) =>
    fetch(`${api}/comments?postId=${id}`)
    .then(response => response.json())
    .then(json => json.length);

    // getComments(1)
    // .then((json) => {
    //  console.log(json.length);
    // });   
  

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    grid_container: {
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
    show_more_btn: {
      width: "100%",
      textAlign: "center",
      fontWeight: "bold"
      
    }
  }));

  const classes = useStyles();  

  

  const handleAuthorChange = (event) => {
    const author = event.target.name;
    // getComments(state.all_posts[i].id)

    setState({
      ...state,
      [author]: event.target.value
    });
    // setState(prevState => {
    //   return {...prevState, author: author };
    // });
  };

  const handleCountChange = (event) => {
    const count = event.target.name;
    setState({
      ...state,
      [count]: event.target.value
    });
    // setState(prevState => {
    //   return {...prevState, count: count };
    // });
  };
  if (state.all_posts && state.count){
    console.log('count', parseInt(state.count), 'state', state.all_posts[0].title, 'array', [...Array(parseInt(state.count)-1)])
  }
  return (
    <div>
      <Grid container spacing={3} className={classes.grid_container}>
        <Grid item xs={6}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Author</InputLabel>
            <Select
              native
              value={state.author}
              onChange={handleAuthorChange}
              label="Author"
              inputProps={{
                name: "author",
                id: "outlined-author-native-simple"
              }}
            >
              <option aria-label="None" value="" />
              <option value={1}>Name 1</option>
              <option value={2}>Name 2</option>
              <option value={3}>Name 3</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Count</InputLabel>
              <Select
                native
                value={state.count}
                onChange={handleCountChange}
                label="Count"
                inputProps={{
                  name: "count",
                  id: "outlined-count-native-simple"
                }}
              >
                <option aria-label="None" value="" />
                <option value={2}>2</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
              </Select>
            </FormControl>
        </Grid>
        {state.all_posts && state.count && ([...Array(parseInt(state.count)-1)].map((e, i) => ( 
          <Grid item xs={12} key={state.all_posts[i].id}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  {state.all_posts[i].title}
                </Typography>
                <Typography variant="body1" component="p">
                {state.all_posts[i].body}
                </Typography>
              </CardContent>
              <CardActions>
                <Badge badgeContent={} color="primary">
                  <CommentIcon/>
                </Badge>
              </CardActions>
            </Card>
          </Grid>
          )))}

        <Grid item xs={12}>
          {state.count ? (
            <Button variant="outlined" color="primary" className={classes.show_more_btn}>
                    SHOW MORE
            </Button>
          ):
          (
            <Button variant="outlined" color="primary" className={classes.show_more_btn} disabled>
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

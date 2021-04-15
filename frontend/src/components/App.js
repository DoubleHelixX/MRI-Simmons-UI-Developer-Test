import React, { useEffect } from "react";
import LoadingBar from "react-redux-loading";
import { useSelector, useDispatch } from "react-redux";

import Grid from "@material-ui/core/Grid";

import DropdownBtns from "./DropdownBtn";
import AuthorContentCard from "./AuthorContentCard";
import ShowMoreBtn from "./ShowMoreBtn";

import { handleInitialData } from "../actions/shared";
import { useStyles, contextTheme} from "../utils/_Constants";

function App() {
  const dispatch = useDispatch();
  const { err = [], isLoading } = useSelector((state) => ({
    err: state.err,
    isLoading: state.isLoading,
  }));

  const classes = useStyles();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <React.Fragment>
      {(!isLoading && !err.length) ? (
        <div>
          <div className={classes.loadingContainer}>
            <LoadingBar className={classes.loading} />
          </div>
          <Grid container spacing={3} className={classes.gridContainer}>
          
            <contextTheme.Provider value="author">
              <DropdownBtns />
            </contextTheme.Provider>
            
            <contextTheme.Provider value="count">
              <DropdownBtns />  
            </contextTheme.Provider>
            
            <AuthorContentCard />
            
            <ShowMoreBtn />
          
          </Grid>
        </div>
      ) : (
        <div>
          <Grid container spacing={3} className={classes.gridContainer} />
        </div>
      )}
    </React.Fragment>
  );
}

export default App;


//* -- Future improvements --
//? - Less dispatch calls (possibly using Refs)
//? - Better Promise implementation
//? - catch => error => dispatch implementation
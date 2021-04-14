import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

export default function DropdownBtns() {
    const useStyles = makeStyles((theme) => ({
        formControl: {
          width: "100%"
        }
      }));
      
    
    const classes = useStyles();
    return(
      <React.Fragment>
        <Grid item xs={6}> {/* DropdownBtn */}
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Author</InputLabel>
            <Select
              native
              // value={state.author}
              // onChange={handleChange}
              label="Author"
              inputProps={{
                name: "author",
                id: "outlined-author-native-simple"
              }}
            >
              <option aria-label="None" value="" />
              {/* {state.users && (state.users.map((x,i) => (
                <option value={state.users[i].id} key={state.users[i].id}>{state.users[i].name}</option>
              )))} */}
            </Select>
          </FormControl>     
        </Grid>
        <Grid item xs={6}> 
          <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Count</InputLabel>
              <Select
                native
                // value={state.count}
                // onChange={handleChange}
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
      </React.Fragment>
      
    )

}
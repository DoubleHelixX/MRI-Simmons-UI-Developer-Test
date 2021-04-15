import { makeStyles } from "@material-ui/core/styles";
import React from "react";

export const url = "https://jsonplaceholder.typicode.com";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  gridContainer: {
    margin: 5,
    // border: '1px solid red',
    width: "auto!important",
  },

  formControl: {
    width: "100%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
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
    fontWeight: "bold",
  },
  loadingContainer: {
    //   border: '1px solid red',
    margin: "10px",
  },

  loading: {
    backgroundColor: "#1C6EA4",
    height: "1px",
    position: "relative",
  },
}));

export const contextTheme = React.createContext(null);

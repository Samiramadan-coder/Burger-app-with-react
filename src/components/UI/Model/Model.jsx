import React from 'react';
import classes from "./Model.module.scss";

const Model = ({children}) => {
  return (
    <div className={classes.Modal}>
      {children}
    </div>
  )
}

export default Model;
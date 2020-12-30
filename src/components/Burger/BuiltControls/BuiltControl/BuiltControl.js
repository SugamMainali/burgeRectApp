import React from "react";
import classes from "./BuiltControl.module.css";

const BuiltControl = (props) => {
  //console.log(props.disabled);
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        {/*--console.log(props.disabled)--*/}
        Less
      </button>
      <button className={classes.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default BuiltControl;

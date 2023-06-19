import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  removeHandler: () => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.removeHandler}>
      {props.text}
    </li>
  );
};

export default TodoItem;

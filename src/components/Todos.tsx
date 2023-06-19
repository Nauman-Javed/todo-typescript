import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{
  items: Todo[];
  removeHandler: (todoId: string) => void;
}> = (props) => {
  return (
    <div>
      <ul className={classes.todos}>
        {props.items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            removeHandler={props.removeHandler.bind(null, item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;

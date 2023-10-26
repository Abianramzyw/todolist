import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import {
  addTodolist,
  removeTodolist,
  updateTodolist,
  completeTodolist,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

const mapStateToProps = (state) => {
  return {
    todolist: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodolist(obj)),
    removeTodo: (id) => dispatch(removeTodolist(id)),
    updateTodo: (obj) => dispatch(updateTodolist(obj)),
    completeTodo: (id) => dispatch(completeTodolist(id)),
  };
};

const DisplayTodolist = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="displaytodolist">
      <div className="buttons">
        <button onClick={() => setSort("all")}>All</button>
        <button onClick={() => setSort("active")}>Active</button>
        <button onClick={() => setSort("completed")}>Completed</button>
      </div>
      <ul>
        {props.todolist.length > 0 && sort === "active"
          ? props.todolist.map((item) => {
              return (
                item.completed === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}
        {props.todolist.length > 0 && sort === "completed"
          ? props.todolist.map((item) => {
              return (
                item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}
        {props.todolist.length > 0 && sort === "all"
          ? props.todolist.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                />
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodolist);

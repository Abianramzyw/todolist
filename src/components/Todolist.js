import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodolist,
  removeTodolist,
  updateTodolist,
  completeTodolist,
} from "../redux/reducer";

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

const Todolist = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="addTodolist">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        placeholder="Your Activities"
      />
      <button
        className="add-btn"
        onClick={() =>
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
      >
        Add
      </button>
      <br />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);

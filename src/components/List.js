import React, { useEffect, useRef, useState } from "react";
import Todos from "./Todos";

const List = ({ setUser }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todolist"))
  );
  const [editingTodo, setEditingTodo] = useState(null);
  const [editTodoNum, setEditTodoNum] = useState(null);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const newTodoRef = useRef();

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = (e) => {
    const title = newTodoRef.current.value;
    e.preventDefault();
    if (title) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            todo: title,
            status: false,
            id: new Date() + Math.random() * 100,
          },
        ];
      });
      newTodoRef.current.value = "";
    } else {
      alert("Please enter todo");
    }
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.status = !todo.status;
    setTodos(newTodos);
  };

  useEffect(() => {
    if (filter === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.status === true));
    } else if (filter === "incomplete") {
      setFilteredTodos(todos.filter((todo) => todo.status === false));
    } else {
      setFilteredTodos(todos);
    }
  }, [todos, toggleTodo]);

  const editHandler = (id) => {
    if (editTodoNum) {
      return alert("Currently editing a todo");
    }
    const focusField = document.getElementById(id);
    setEditTodoNum(id);
    focusField.focus();
  };

  const editTodoTitle = ({ id, name }) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.todo = name;
    setEditingTodo(newTodos);
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter((each) => each.id !== id));
  };

  const saveHandler = (id) => {
    setEditTodoNum(null);
    setTodos(editingTodo);
  };

  const changeFilter = () => {
    if (filter === "all") {
      setFilter("completed");
      setFilteredTodos(todos.filter((todo) => todo.status === true));
    } else if (filter === "completed") {
      setFilter("incomplete");
      setFilteredTodos(todos.filter((todo) => todo.status === false));
    } else {
      setFilter("all");
      setFilteredTodos(todos);
    }
  };
  return (
    <Todos
      addNewTodo={addNewTodo}
      newTodoRef={newTodoRef}
      changeFilter={changeFilter}
      filter={filter}
      filteredTodos={filteredTodos}
      editTodoNum={editTodoNum}
      toggleTodo={toggleTodo}
      editHandler={editHandler}
      deleteHandler={deleteHandler}
      editTodoTitle={editTodoTitle}
      saveHandler={saveHandler}
      setUser={setUser}
    />
  );
};

export default List;

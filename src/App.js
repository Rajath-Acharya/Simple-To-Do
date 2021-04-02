import React, { useState, useEffect } from "react";
import InputData from "./Components/InputData";
import TodoList from "./Components/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [userInput, setUserInput] = useState("");
  const [showData, setShowData] = useState([]);
  const [status, setStatus] = useState("All");
  const [list, setList] = useState([]);

  useEffect(() => {
    checkTodos();
  }, [showData, status]);

  function handleSubmit(e) {
    e.preventDefault();
    setShowData([
      ...showData,
      {
        todos: userInput,
        id: uuidv4(),
        done: false,
        edit: false,
      },
    ]);
    setUserInput("");
  }
  function deleteTodo(id) {
    const newList = showData.filter((todo) => todo.id !== id);
    setShowData(newList);
  }

  function taskDone(id) {
    const newData = showData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
        };
      }
      return item;
    });
    setShowData(newData);
  }

  function editTodo(todo){
    const editTodo = showData.map(item=>{
      if(item.id===todo.id){
        return {
          ...item,
          edit: !item.edit,
        }
      }
      return item;
    })
    setShowData(editTodo);
  }

    function updateTodo(todo){
    const updateTodo = showData.map(item=>{
      if(item.id===todo.id){
        return {
          ...item,
         todos: todo.todos,
         edit: false,
        }
      }
      return item;
    })
    return setShowData(updateTodo);
  }

  function checkTodos() {
    switch (status) {
      case "Incomplete":
        setList(showData.filter((task) => task.done === false));
        break;
      case "Completed":
        setList(showData.filter((task) => task.done === true));
        break;
      default:
        setList(showData);
        break;
    }
  }
  return (
    <>
      <InputData
        handleSubmit={handleSubmit}
        setUserInput={setUserInput}
        userInput={userInput}
        showData={showData}
        setStatus={setStatus}
      />
      <TodoList
        list={list}
        deleteTodo={deleteTodo}
        taskDone={taskDone}
        editTodo={editTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default App;

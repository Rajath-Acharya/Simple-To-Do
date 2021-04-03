import React,{useState,useEffect} from "react";

function TodoList({ list, deleteTodo, taskDone, editTodo,updateTodo }) {
  const [newTodos, setNewTodos]=useState([]);
  useEffect(() => {
setNewTodos(list);
  }, [list]);

  function changeTodo(e,todo){
const changedTodo = e.target.value;
    const editedTodo = newTodos.map(item=>{
      if(item.id===todo.id){
        return {
          ...item,
todos: changedTodo,
        }
      }
      return item;
    })
    setNewTodos(editedTodo);
  }

  return (
    <>
      {newTodos.map((todo, index) => {
        return (
          <React.Fragment  key={index}>
          {!todo.edit ?
            <li className={todo.done ? "done" : "notDone"}>
              {todo.todos}
            </li> :
            <>
            <input
             type='text'
              value={todo.todos}
              onChange={(e)=>changeTodo(e,todo)}
              />
              <button onClick={()=>updateTodo(todo)}>update</button></>}
              {!todo.edit &&
            <button onClick={() => editTodo(todo)}>edit&nbsp;</button>}
            <button onClick={() => deleteTodo(todo.id)}>delete</button>&nbsp;
            <button onClick={() => taskDone(todo.id)}>done</button>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default TodoList;

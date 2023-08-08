import React from "react";
import {
  progressComplete,
  progressIncomplete,
  container,
  todoContainer,
  change
} from "./data.module.css";

const Data = ({ TodoData, setTodoData }) => {
  const handleDelete = (todoId) => {
    let data = TodoData.filter((ele, i) => ele.id !== todoId);
    setTodoData(data);
  };

  // const change = (todoId) =>{
  //   let data = TodoData.map((idx)=>{
  //     idx == todoId
  //   })
  //   data.status = "true";
  //   setTodoData(data);
  // };
  return (
    <div className={container}>
      {TodoData.map((todo, ind) => (
        <div className={todoContainer} key={ind}>
         <div>
         <h3 className={todo.status ? progressComplete : progressIncomplete}>
            {todo.title}
          </h3>
         </div>
          <div className={change}>
            <div><input type='checkbox'/></div>
           <div> <button onClick={() => handleDelete(todo.id)}>
            Delete
          </button></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Data;
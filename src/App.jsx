import { useState, useEffect } from "react";
import "./App.css";
import Data from "./components/Data/Data";
import Input from "./components/Input/Input";
import Headers from "./components/Header/Headers";
import { TodoData } from "./Data/TodoData";

function App() {
  const [todoData, setTodoData] = useState([]);
  useEffect(() => {
    setTodoData(TodoData);
  }, []);
  return (
    <div>
      <Headers />
      <Input setTodoData={setTodoData} TodoData={todoData} />
      <Data setTodoData={setTodoData} TodoData={todoData} />
    </div>
  );
}

export default App;

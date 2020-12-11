import { useState } from "react";
import './App.scss'
import { TaskCreator, Tasks } from "./components";

function App() {

  const [tasks, setTasks] = useState([
    { 
      name: 'Сделать математику', 
      completed: false
    },
    { 
      name: 'Сходить на тренировку',  
      completed: false
    },
  ])

  const onRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, curIdx) => index !== curIdx));
  };

  const onComplete = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, curIdx) =>
        index === curIdx
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  function addTask(inputText)  {
    inputText &&
    setTasks((prev) => [
      ...prev,
      {
        name:inputText,
        completed: false
      }
    ])
  }

  return (
    <div className="App">
      <TaskCreator addTask={addTask}/>
      <Tasks tasks={tasks} onRemoveTask={onRemoveTask} onComplete={onComplete}/>
    </div>
  );
}

export default App;

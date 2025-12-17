import React from "react";
import { useState } from "react";

function App(){

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return(
    <>
     <div>
      <h2>To Do List</h2>

      {/* Input */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      {/* Add button */}
      <button
        onClick={() => {
          setTasks([...tasks, task]);
          setTask("");
        }}
      >
        Add
      </button>

      {/* Show tasks */}
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() =>
              setTasks(tasks.filter((_, i) => i !== index))
            }>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </>
    )
}

export default App
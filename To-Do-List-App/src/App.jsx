import React from "react";
import { useState } from "react";


function App() {

  const [title, settitle] = useState("")
  const [des, setdes] = useState("")
  const [mainTask, setmainTask] = useState([])



  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, des }])
    
    settitle("")
    setdes("")
    console.log(mainTask);
    
  }
  const deleteHandler = (i)=>{
let copyTask =[...mainTask]
copyTask.splice(i,1)
setmainTask(copyTask)
  }
  const completeHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask[i].completed = !copyTask[i].completed;
    setmainTask(copyTask);
  };

  


    let reanderTask = <h2>No Task Available</h2>

    if (mainTask.length > 0) {

      reanderTask = mainTask.map((t, i) => {

        return(
          <li key={i}  className=" flex items-center justify-between mb-1">
            <div className=" items-center justify-between mb-1 w-1/3">
              <h1 className="text-5xl font-bold text-green-300 ">{t.title}</h1>
              <p className="text-lg font-semibold">{t.des}</p>
            </div>

            <div className="flex justify-between items-center gap-3">
              <button
            onClick={()=>{
              deleteHandler(i)
            }}
            className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
            <button
            onClick={()=>{
              completeHandler(i)
            }}
            className="bg-green-400 text-white px-4 py-2 rounded font-bold">Completed</button>
            </div>
          </li>
        )
      })
    }

    return (
      <>
        <h1 className="bg-black text-white text-5xl font-bold text-center p-5">
          My ToDo List</h1>
        <form onSubmit={submitHandler}>
          <input type="text" className="text-2xl border-zinc-800 border-4  px-4 py-2 m-5  "
            placeholder="Enter Task Here"
            value={title}
            onChange={(e) => {
              settitle(e.target.value)

            }
            }
          />
          <input type="text" className="text-2xl border-zinc-800 border-4  px-4 py-2 m-5  "
            placeholder="Enter Description Here"
            value={des}
            onChange={(e) => {
              setdes(e.target.value)
            }
            }
          />
          <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">Add Task</button>
        </form>

        <hr />
        <div className="p-8 bg-slate-200">
          <ul>
            {reanderTask}
          </ul>
        </div>
      </>
    )
  }

  export default App



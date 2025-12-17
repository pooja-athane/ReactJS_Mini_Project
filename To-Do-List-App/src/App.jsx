import React from "react";  
import { useState } from "react"; 


function App(){
// let [] = useState()
return(
  <>
  <div className="App h-[100px]  flex items-center justify-center gap-3">
    <h1 className="text-blue-500 text-5xl font-extrabold"> ToDo List</h1>
    <form>
      <input className=" " type="text" /> <button className="bg-gray-200 px-6 py-3 font-bold border-none " >Save</button>
    </form>
  </div>
  </>
)
}

export default App
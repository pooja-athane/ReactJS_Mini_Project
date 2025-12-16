import { useState } from 'react'
 
function App() {
  const [color, setColor] = useState("black")
 
  // understanding useState functionality
  //  function useState(){
  //     return "black";
  //  }
 
  //  let color = useState()
  //  let loadValue = "black"
 
  return (
    <>
      <div
        className="w-full h-screen flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="button-container w-[80%] h-[10%] bg-white rounded-full flex items-center justify-center gap-[10rem]">
          <button className='h-[50%] w-[7rem] rounded-full text-white bg-red-500 '
            onClick={() => setColor("red")}
          >RED</button>
          <button className='h-[50%] w-[7rem] rounded-full text-white bg-green-500 '
            onClick={() => setColor("green")}
          >Green</button>
          <button className='h-[50%] w-[7rem] rounded-full text-white bg-blue-500 '
            onClick={() => setColor("blue")}
          >Blue</button>
          <button className='h-[50%] w-[7rem] rounded-full text-white bg-orange-500 '
            onClick={() => setColor("orange")}
          >Orange</button>
        </div>
      </div>
    </>
  )
}
 
export default App
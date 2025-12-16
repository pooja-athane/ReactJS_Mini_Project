// import { useState } from "react";

// import Button from "../../compmonent-1/src/component/Button";

// function App() {
//   const [color, setColor] = useState('black')
//   let colorSets = [
//     "red",
//     "blue",
//     "purple",
//   ]

//   return (
//     <>

//       <div className="w-full h-screen flex items-center justify-center"
//         style={{ backgroundColor: color }}>
//         <div className="button-container h-[10%] w-[80%] bg-white flex items-center justify-center rounded-full gap-[15rem] ">
//           {
//             colorSets.map((colorVal) => {
//               console.log(colorVal);
//               return (
//                 <Button
//                   key={colorVal}
//                   bgColorName={colorVal}
//                   bgColorUpdate={() => { setColor(colorVal) }}
//                 />
//               )
//             })
//           }
//         </div>
//       </div>
//     </>
//   )
// }

// export default App




import { useState } from "react";
import Button from "./component/Button.jsx"

function App() {
  const [color, setColor] = useState('black')
  let colorSets = [
    "red",
    "blue",
    "purple",
  ]

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center"
        style={{ backgroundColor: color }}>
        <div className="button-container h-[10%] w-[80%] bg-white flex items-center justify-center rounded-full gap-[15rem] ">
          {
            colorSets.map((colorVal) => {
              console.log(colorVal);
              return (
                <Button
                  key={colorVal}
                  bgColorName={colorVal}
                  bgColorUpdate={() => { setColor(colorVal) }}
                />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
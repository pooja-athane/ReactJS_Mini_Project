import React from 'react'
import Card from './components/Card'
function App() {
  const data = [{
    content: "Complete the Project and Deploy it on vercel, Once everything gets done share the project link to the instructor",
    ContainerclassName: " bg-pink-700 h-40 w-50 p-[10px] rounded-md m-[1rem]  hover:scale-125  ",
    contentClassName: 'text-sm text-white hover:text-black '
  },
  {
    content: "Complete the Project and Deploy it on vercel, Once everything gets done share the project link to the instructor",
    ContainerclassName: " bg-green-700 h-40 w-50 p-[10px] rounded-md m-[1rem]  hover:scale-125  ",
    contentClassName: 'text-sm text-white hover:text-black '
  },

  ]
  return (
    <>
      <div className="w-full h-screen bg-zinc-800 p-[2rem] flex  justify-center gap-[1rem] relative">

        {
          data.map((value) => {
            return (
              <Card
                key={value.value}
                content={value.content}
                ContainerclassName={value.ContainerclassName}
                contentClassName={value.contentClassName}
              />
            )

          })
          
        }
      </div>
    </>
  )
}

export default App

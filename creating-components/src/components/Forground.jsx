import React, { useState } from 'react'
import Card from './Card'

 export default function Forground() {

    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen:false, tagTitle: "Download Now", tagcolor: "green" },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Upload", tagcolor: "green" },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagcolor: "green" },
        },
    ]
    
    return (
        <div className=" fixed top-0 left-0 z-3  w-full h-screen flex gap-10 flex-wrap">
            {data.map((item, index) =>(
                <Card  key={index} data={item} />
            ))}
        </div>
    )
}

// export default Forground

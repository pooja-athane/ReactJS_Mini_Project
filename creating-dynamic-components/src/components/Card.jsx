import React from 'react'

export default function Card({
    //  default arguments when nothing in particular tag
    content = { content: "pass the prop within the component" },
    ContainerclassName = { ContainerclassName: "bg-orange-500 w-30 h-30 m-[1rem] pl-[10px] pt-[5px] absolute" },
    contentClassName = { contentClassName: "text-[9px] leading-[10px] text-white" }
}) {
    return (
        <>
            <div className={ContainerclassName}>
                <p className={contentClassName}>{content}</p>
            </div>
        </>
    )
}



// export default Card

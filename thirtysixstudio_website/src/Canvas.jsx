import React, { useEffect, useRef, useState } from 'react'
import image from './image';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Canvas({ details }) {
    //   how to show first imgage load on canvas 
    const [index, setIndex] = useState({ value: details.startIndex })
    const canvasRef = useRef(null)

    useGSAP(() => {
        gsap.to(index,
            {
                value: details.startIndex + details.numImages - 1,
                duration: details.duration,
                repeat: -1,
                ease: "linear",
                onUpdate: () => {
                    setIndex({ value: Math.round(index.value) })

                }
            }
        )
    })
    useEffect(() => {
        const scale = window.devicePixelRatio
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d")
        const img = new Image[0]
        img.src = image[index.value]
        img.onload = () => {
            canvas.width = canvas.offsetWidth*scale 
            canvas.height = canvas.offsetHeight*scale
            canvas.style.height = canvas.offsetHeight + "px"
            canvas.style.width = canvas.offsetWidth + "px"

            ctx.scale(scale, scale)
            ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight)
        }
    }, [index])


    return (
        <canvas
        data-scroll 
        data-scroll-speed ={Math.random().toFixed(1)}
            ref={canvasRef}
            className='absolute'
            id="canvas"
            style={{ 
                width: `${details.size*1.8}px`,
                height: `${details.size*1.8}px`,
                top:`${details.top}`,
                left:`${details.left}`,
                zIndex:`${details.zIndex}`,
             }}
        >
            {/* <Image/> */}
        </canvas>
    )
}

export default Canvas


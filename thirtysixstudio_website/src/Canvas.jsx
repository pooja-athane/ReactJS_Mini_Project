import React, { useEffect, useRef, useState } from 'react'
import image from './image';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function Canvas({ details }) {
  const canvasRef = useRef(null)
//   const frame = useRef(details.startIndex)
const frame = useRef({ value: details.startIndex })


  const drawImage = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const scale = window.devicePixelRatio || 1

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = image[Math.round(frame.current)]

    img.onload = () => {
      canvas.width = canvas.offsetWidth * scale
      canvas.height = canvas.offsetHeight * scale

      ctx.setTransform(scale, 0, 0, scale, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight)
    }
  }

  useGSAP(() => {
    gsap.to(frame, {
      current: details.startIndex + details.numImages - 1,
      duration: details.duration,
      repeat: -1,
      ease: "linear",
      onUpdate: drawImage,
    })
  })

  // 🔥 draw first frame immediately
  useEffect(() => {
    drawImage()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      data-scroll
      data-scroll-speed={Math.random().toFixed(1)}
      className="absolute"
      style={{
        width: `${details.size * 1.8}px`,
        height: `${details.size * 1.8}px`,
        top: `${details.top}%`,
        left: `${details.left}%`,
        zIndex: details.zIndex,
      }}
    />
  )
}

export default Canvas
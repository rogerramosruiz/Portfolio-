import React from 'react'
import { useEffect, useRef } from 'react'

export default function CanvasMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    context.clearRect(0, 0, canvas.width, canvas.height)

    context.fillStyle = '#FF0000'
    context.fillRect(50, 50, 100, 100)

    context.beginPath()
    context.arc(150, 150, 50, 0, Math.PI * 2)
    context.fillStyle = '#00FF00'
    context.fill()
    context.closePath()
  }, [])

  return (
    <div>
      <div className='flex justify-center'>
        <canvas
          width={500}
          height={500}
          className='bg-black'
          ref={canvasRef}
        ></canvas>
      </div>
    </div>
  )
}

import React from 'react'
import { useEffect, useRef } from 'react'
import photo from '../images/y1.png'

const characters =
  'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const len = characters.length
function randomUnoform(min: number, max: number) {
  return Math.random() * (max - min) + min
}
function map_range(
  value: number,
  low1: number,
  high1: number,
  low2: number,
  high2: number
) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1)
}

export default function CanvasMatrixsac() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = React.useRef(0)
  useEffect(() => {
    let imageData: ImageData | undefined
    let charsPositionY: number[] = []
    let columns = 0
    let minHeight = 0,
      maxHeight = 0
    let clearBackGround = false
    const fontSize = 6

    let lastTime = 0
    const fps = 30
    const nextFrame = 1000 / fps
    let timer = 0
    let swBgColor = true

    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    context.clearRect(0, 0, canvas.width, canvas.height)

    const image = new Image()

    image.src = photo

    function initilaValues() {
      if (!canvas) return
      if (!context) return
      charsPositionY = []
      context.clearRect(0, 0, canvas.width, canvas.height)
      canvas.width = Math.min(500, window.innerWidth - 50)
      canvas.height = canvas.width
      minHeight = -fontSize
      maxHeight = canvas.height / fontSize
      columns = Math.trunc(canvas.width / fontSize)

      for (let i = 0; i < columns; i++)
        charsPositionY.push(randomUnoform(minHeight, maxHeight))
      context.font = fontSize + 'px monospace'
      imageData = getImage(image)
    }

    function getImage(img: HTMLImageElement) {
      if (!canvas) return
      const scaleFactor =
        (canvas.width + canvas.height) / (img.width + img.height)
      const newWidth = img.width * scaleFactor
      const newHeight = img.height * scaleFactor

      const imgCanvas = document.createElement('canvas')
      const imgCtx = imgCanvas.getContext('2d')
      if (!imgCtx) return
      imgCanvas.width = newWidth //img.width
      imgCanvas.height = newHeight //img.height
      imgCtx.drawImage(img, 0, 0, newWidth, newHeight)
      const imgData = imgCtx.getImageData(
        0,
        0,
        imgCanvas.width,
        imgCanvas.height
      )
      return imgData
    }

    function chooseCharacter(avg?: number) {
      if (avg) {
        const charIndex = Math.trunc(map_range(avg, 0, 255, len - 1, 0))
        return characters[charIndex]
      } else {
        return characters.charAt(Math.trunc(Math.random() * characters.length))
      }
    }

    function writeCharacter(columnIndex: number) {
      const startX = 0
      const startY = 0
      if (!context) return
      if (!canvas) return
      if (swBgColor) context.fillStyle = 'rgb(0, 255, 0)'
      else context.fillStyle = 'rgb(82, 255, 82)'

      let posX = columnIndex * fontSize
      let posY = charsPositionY[columnIndex] * fontSize
      let character = chooseCharacter()
      if (!imageData) return
      if (
        posX > startX &&
        posX < imageData.width &&
        posY > startY &&
        posY < imageData.height
      ) {
        const pos =
          Math.trunc(posY - startY) * imageData.width * 4 + (posX - startX) * 4
        if (pos + 3 < imageData.data.length && imageData.data[pos + 3] > 0) {
          const r = imageData.data[pos]
          const g = imageData.data[pos + 1]
          const b = imageData.data[pos + 2]
          context.fillStyle = `rgb(${r}, ${g}, ${b})`
        }
      }
      context.fillText(
        character,
        posX,
        posY,
        randomUnoform(fontSize, fontSize + 25)
      )
      charsPositionY[columnIndex]++
      if (
        charsPositionY[columnIndex] * fontSize > canvas.height &&
        Math.random() > 0.9
      ) {
        charsPositionY[columnIndex] = -randomUnoform(minHeight, maxHeight) / 2
      }
    }

    function draw() {
      if (!context) return
      if (!canvas) return
      if (clearBackGround) {
        context.fillStyle = 'rgba(0, 0, 0, 0.89)'
        clearBackGround = false
      } else context.fillStyle = 'rgba(0, 0, 0, 0.009)'
      context.fillRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < columns; i++) {
        writeCharacter(i)
      }
    }

    function animate(timeStamp: number) {
      const deltaTime = timeStamp - lastTime
      lastTime = timeStamp
      if (timer > nextFrame) {
        draw()
        timer = 0
      }
      timer += deltaTime
      requestRef.current = requestAnimationFrame(animate)
    }
    window.onresize = () => initilaValues()
    let intervalId1 = setInterval(() => {
      swBgColor = !swBgColor
    }, 3000)

    let intervalId2 = setInterval(() => {
      clearBackGround = true
    }, 10000)

    image.onload = () => {
      initilaValues()
      animate(0)
    }
    return () => {
      cancelAnimationFrame(requestRef.current)
      clearInterval(intervalId1)
      clearInterval(intervalId2)
    }
  }, [])

  return (
    <div>
      <div className="flex justify-center">
        <canvas
          width={500}
          height={500}
          className="bg-black rounded-full"
          ref={canvasRef}
        ></canvas>
      </div>
    </div>
  )
}
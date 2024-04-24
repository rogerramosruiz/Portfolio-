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
  useEffect(() => {
    let imageData: ImageData | undefined
    let charsPositionY: number[] = []
    let columns = 0
    let minHeight = 0,
      maxHeight = 0
    let clearBackGround = false
    const fontSize = 5

    let lastTime = 0
    const fps = 60
    const nextFrame = 1000 / fps
    let timer = 1
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
//      canvas.width = image.width
  //    canvas.height = image.height
      minHeight = -fontSize
      maxHeight = canvas.height / fontSize
      columns = Math.trunc(canvas.width / fontSize)
      for (let i = 0; i < columns; i++)
        charsPositionY.push(randomUnoform(minHeight, maxHeight))
      context.font = fontSize + 'px monospace'
    }

    function getImage(img: HTMLImageElement) {
      const imgCanvas = document.createElement('canvas')
      const imgCtx = imgCanvas.getContext('2d')
      if (!imgCtx) return
      imgCanvas.width = img.width
      imgCanvas.height = img.height
      imgCtx.drawImage(img, 0, 0)
      return imgCtx.getImageData(0, 0, imgCanvas.width, imgCanvas.height)
    }

    function chooseCharacter(avg?: number) {
      if (avg) {
        const charIndex = Math.trunc(map_range(avg, 0, 255, len - 1, 0))
        return characters[charIndex]
      } else {
        return characters.charAt(Math.trunc(Math.random() * characters.length))
      }
    }


    function writeCharacter(i: number) {
      if (!context) return
      if (!canvas) return
      if (swBgColor) context.fillStyle = 'rgb(0, 255, 0)'
      else context.fillStyle = 'rgb(82, 255, 82)'

      let posX = i * fontSize
      let posY = charsPositionY[i] * fontSize
      let character = chooseCharacter()
      if (!imageData) return
      const pos = Math.trunc(posY) * imageData.width * 4 + posX * 4
      if (
        posX > 0 &&
        posX < image.width &&
        posY > 0 &&
        posY < imageData.height &&
        pos + 3 < imageData.data.length &&
        imageData.data[pos + 3] > 0
      ) {
        const r = imageData.data[pos]
        const g = imageData.data[pos + 1]
        const b = imageData.data[pos + 2]
        context.fillStyle = `rgb(${r}, ${g}, ${b})`
      }
      context.fillText(
        character,
        posX,
        posY,
        randomUnoform(fontSize, fontSize + 25)
      )
      charsPositionY[i]++
      if (charsPositionY[i] * fontSize > canvas.height && Math.random() > 0.9) {
        charsPositionY[i] = -randomUnoform(minHeight, maxHeight) / 2
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
      requestAnimationFrame(animate)
    }
    setInterval(() => {
      swBgColor = !swBgColor
    }, 3000)

    setInterval(() => {
      clearBackGround = true
    }, 10000)

    window.onresize = () => initilaValues()
    image.onload = () => {
      const imgCanvas = document.createElement('canvas')
      const imgCtx = imgCanvas.getContext('2d')
      imgCanvas.width = image.width
      imgCanvas.height = image.height
      if (!imgCtx) return
      imgCtx.drawImage(image, 0, 0)

      imageData = getImage(image)

      initilaValues()
      animate(0)
    }
  }, [])

  return (
    <div>
      <div className='flex justify-center'>
        <canvas
          width={500}
          height={500}
          className='bg-black rounded-full'
          ref={canvasRef}
        ></canvas>
      </div>
    </div>
  )
}

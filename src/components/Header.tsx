import React from 'react'

import { useTypewriter, Cursor } from 'react-simple-typewriter'
import CanvasMatrix from './CanvasMatrix'

export default function Header() {
  const [text] = useTypewriter({
    words: [
      'Software Engineer',
      'Full Stack Developer',
      'Back-End Developer',
      'Front-End Developer',
      'AI Enthusiast',
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  })

  return (
    <div className='bg-blue-800 p-5 min-h-screen flex items-center'>
      <div className='w-full flex justify-center gap-2 flex-col md:flex-row'>
        <CanvasMatrix />
        <div className='w-full lg:w-3/5 xl:w-2/5 flex items-center justify-center'>
          <p className='text-white text-3xl'>
            <h1 className='text-center'>
              Hello I am <span>Roger</span>.
            </h1>
            <h1>
              I'm
              <span className='font-semibold'>
                {' ' + text}
                <span className='text-gray-200'>
                  <Cursor cursorStyle='|' />
                </span>
              </span>
            </h1>
          </p>
        </div>
      </div>
    </div>
  )
}

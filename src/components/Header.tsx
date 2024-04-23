import React from 'react'

import { useTypewriter, Cursor } from 'react-simple-typewriter'

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
    <div className='bg-blue-500 p-5'>
      <div className='flex justify-center gap-4 flex-col md:flex-row'>
        <canvas width={500} height={500} className='bg-black'></canvas>
        <div className='w-full flex items-center justify-center'>
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

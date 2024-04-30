import React from 'react'
import { images } from '../lib/images'
export default function About() {
  const showImages = [
    images.python,
    images.flask,
    images.fastapi,
    images.opencv,
    images.selenium,
    images.blender,
    images.node,
    images.nextjs,
    images.react,
    images.vue,
    images.svelte,
    images.tailwindcss,
    images.postgresql,
    images.redis,
    images.mysql,
    images.docker,
  ]
  const imagesGrids = []
  let imageGrid: string[] = []

  for (let i = 0; i < showImages.length; i++) {
    if (i !== 0 && i % 4 === 0) {
      imagesGrids.push(imageGrid.slice())
      imageGrid = []
    }
    imageGrid.push(showImages[i])
  }
  if (imageGrid.length !== 0) imagesGrids.push(imageGrid)

  return (
    <div className='bg-gray-950 text-white'>
      <h1 className='font-bold text-6xl text-center py-10 underline'>
        About & Skills
      </h1>
      <div className='flex flex-col md:flex-row justify-center'>
        <div className='w-full md:w-7/12 px-5 md:px-0 md:pl-5 flex justify-center p-2 text-lg text-slate-100'>
          <p>
            As a developer, I am deeply dedicated to constantly expanding my
            skills and exploring new horizons. I possess a strong passion for
            problem-solving and innovation within software development,
            constantly seeking out fresh challenges and opportunities for
            growth. My enthusiasm is matched by a keen interest in machine
            learning and computer vision technologies. I thrive on the dynamic
            interplay of creativity, logic, and technology, which drives me to
            create elegant solutions and continually push the limits of what can
            be achieved.
          </p>
        </div>
        <div className='w-full px-4 mt-6 md:mt-0'>
          <div>
            <div className='grid grid-cols-4 gap-4'>
              {imagesGrids.map((grid, i) => (
                <div className='grid gap-4 justify-center items-center' key={i}>
                  {grid.map((imgUrl, j) => (
                    <div key={j}>
                      <img
                        className='h-auto max-w-20 sm:max-w-28 rounded-lg object-cover object-center'
                        src={imgUrl}
                        alt=''
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

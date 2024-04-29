import React from 'react'

export default function About() {
  const images = {
    react:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1024px-React.svg.png',
    nextjs:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1024px-Nextjs-logo.svg.png',
    vue: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png',
    svelte:
      'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg',
    babylonjs:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Babylon_logo_v4.svg/1024px-Babylon_logo_v4.svg.png',
    node: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png',
    python:
      'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    flask:
      'https://flask.palletsprojects.com/en/3.0.x/_images/flask-horizontal.png',
    fastapi: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png',
    opencv:
      'https://upload.wikimedia.org/wikipedia/commons/5/53/OpenCV_Logo_with_text.png',
    selenium:
      'https://upload.wikimedia.org/wikipedia/commons/9/9f/Selenium_logo.svg',
    blender:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Logo_Blender.svg/1024px-Logo_Blender.svg.png',
    nvidia:
      'https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-vert-500x200-2c50-d.png',
    pillow:
      'https://user-images.githubusercontent.com/72164/72531822-47176780-3840-11ea-9ec0-4eaefe077208.png',
    redis:
      'https://redis.com/wp-content/themes/wpx/assets/images/logo-redis.svg',
    postgresql:
      'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
    mysql: 'https://labs.mysql.com/common/logos/mysql-logo.svg',
    tailwindcss:
      'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    docker:
      'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png',
  }
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
        <div className='w-full md:w-7/12 px-5 md:px-0 md:pl-5 flex justify-center p-2'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            culpa, incidunt repudiandae repellendus beatae blanditiis quidem
            illo iure magnam, molestias molestiae aperiam quod odio reiciendis
            autem doloribus vero in quis maxime possimus voluptas laboriosam
            officiis enim totam! Nulla explicabo a quae sunt fugiat inventore
            dolore magnam quibusdam fugit? Labore, consequatur.
            lo
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

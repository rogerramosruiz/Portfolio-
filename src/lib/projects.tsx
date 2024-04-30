import { images } from './images'
import bgImage from '../images/bgImg.png'
import { icons } from './icons'
export const projects = [
  {
    backgroundImage: bgImage,
    title: '3D object viwer',
    description: 'Visualize 3D objects from the browser ',
    imageUrls: [images.node, images.vue, images.tailwindcss],
    url: 'http://hologramas.fcpn.edu.bo/',
    repositories: {
      backeEndRepo: {
        url: 'https://github.com/rogerramosruiz/babylon-backend',
        icon: icons.node,
      },
      frontEndRepo: {
        url: 'https://github.com/rogerramosruiz/babylon-frontend',
        icon: icons.vue,
      },
    },
  },
  {
    backgroundImage: bgImage,
    title: 'Object Plastic detection',
    description: 'Detect plastics on images, videos, and on real time ',
    imageUrls: [
      images.python,
      images.opencv,
      images.docker,
      images.nvidia,
      images.svelte,
      images.tailwindcss,
    ],
    repositories: {
      backeEndRepo: {
        url: 'https://github.com/rogerramosruiz/object-detection-backend',
        icon: icons.fastapi,
      },
      frontEndRepo: {
        url: 'https://github.com/rogerramosruiz/object-detection-frontend',
        icon: icons.svelte,
      },
    },
  },
  {
    backgroundImage: bgImage,
    title: 'Web Scrapping Image downloader',
    description: 'Scrap a bunch of images and download it with Python',
    imageUrls: [images.python],
    repositories: {
      gitRepository: 'https://github.com/rogerramosruiz/img-downloader',
    },
  },
  {
    backgroundImage: bgImage,
    title: 'Web Scrapping 360° Image Downloader',
    description: 'Using Selenium and Python scrap and download images in 360',
    imageUrls: [images.python, images.selenium],
    repositories: {
      gitRepository: 'https://github.com/rogerramosruiz/hdri-downloader',
    },
  },
  {
    backgroundImage:
      'https://raw.githubusercontent.com/rogerramosruiz/synthtetic_dataset/master/example.jpeg',
    title: 'Synthetic dataset images generation',
    description: 'Merging images to images genrate a shyntetic dataset',
    imageUrls: [images.python, images.pillow],
    repositories: {
      gitRepository: 'https://github.com/rogerramosruiz/synthtetic_dataset',
    },
  },
  {
    backgroundImage:
      'https://raw.githubusercontent.com/rogerramosruiz/synthetic-dataset-blender/master/example.jpeg',
    title: 'Synthetic dataset generation blender',
    description:
      'Rendering objects with backgrung images to create a shyntetic dataset',
    imageUrls: [images.python, images.blender],
    repositories: {
      gitRepository:
        'https://github.com/rogerramosruiz/synthetic-dataset-blender',
    },
  },
  {
    backgroundImage:
      'https://raw.githubusercontent.com/rogerramosruiz/synthetic-dataset-blender-hdri/master/example.jpeg',
    title: 'Synthetic dataset generation Blender 360°',
    description:
      'Generating syntetic dataset rendering 3D objects with 360° images',
    imageUrls: [images.python, images.blender],
    repositories: {
      gitRepository:
        'https://github.com/rogerramosruiz/synthetic-dataset-blender-hdri',
    },
  },
  {
    backgroundImage: bgImage,
    title: 'Todo App',
    description: 'A todo app build with microservies and authentication',
    imageUrls: [
      images.python,
      images.flask,
      images.postgresql,
      images.redis,
      images.docker,
      images.svelte,
      images.tailwindcss,
    ],
    repositories: {
      gitRepository: 'https://github.com/rogerramosruiz/todo',
    },
  },
  {
    backgroundImage: bgImage,
    title: 'Web Scrapping departamentos bolivia',
    description: 'Script to scrap data for all the deparments of Bolivia',
    imageUrls: [images.python, images.selenium],
    repositories: {
      gitRepository: 'https://github.com/rogerramosruiz/deparatamentos-bolivia',
    },
  },
]

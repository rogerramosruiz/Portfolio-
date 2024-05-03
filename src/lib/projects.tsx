import { icons } from './icons'
import { images } from './images'
export const projects = [
  {
    backgroundImage:
      'https://raw.githubusercontent.com/rogerramosruiz/portfolioimages/main/3d_viwer.png',
    title: '3D object visualizer',
    description: 'Visualize and manipulate 3D objects from the browser.',
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
    backgroundImage:
      'https://raw.githubusercontent.com/rogerramosruiz/portfolioimages/main/object_detection.png',
    title: 'Object Plastic detection',
    description: 'Detect plastics in images, videos, and in real-time.',
    imageUrls: [
      images.python,
      images.fastapi,
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
    backgroundImage:
      'https://raw.githubusercontent.com/rogerramosruiz/portfolioimages/main/img_downloader.png',
    title: 'Web Scraping Image Downloader',
    description:
      'Scrape a collection of images and download them using Python.',
    imageUrls: [images.python],
    repositories: {
      gitRepository: 'https://github.com/rogerramosruiz/img-downloader',
    },
  },
  {
    backgroundImage:
      'https://raw.githubusercontent.com/rogerramosruiz/portfolioimages/main/hdri_downloader.png',
    title: 'Web Scraping 360° Image Downloader',
    description:
      'Using Selenium and Python to scrape and download 360° images.',
    imageUrls: [images.python, images.selenium],
    repositories: {
      gitRepository: 'https://github.com/rogerramosruiz/hdri-downloader',
    },
  },
  {
    backgroundImage:
      'https://raw.githubusercontent.com/rogerramosruiz/synthtetic_dataset/master/example.jpeg',
    title: 'Synthetic dataset image generation',
    description: 'Merging images to generate a synthetic dataset.',
    imageUrls: [images.python, images.pillow],
    repositories: {
      gitRepository: 'https://github.com/rogerramosruiz/synthtetic_dataset',
    },
  },
  {
    backgroundImage:
      'https://raw.githubusercontent.com/rogerramosruiz/synthetic-dataset-blender/master/example.jpeg',
    title: 'Blender Synthetic Dataset Generation',
    description:
      'Rendering objects with background images to generate a synthetic dataset.',
    imageUrls: [images.python, images.blender],
    repositories: {
      gitRepository:
        'https://github.com/rogerramosruiz/synthetic-dataset-blender',
    },
  },
  {
    backgroundImage:
      'https://raw.githubusercontent.com/rogerramosruiz/synthetic-dataset-blender-hdri/master/example.jpeg',
    title: 'Blender Synthetic dataset generation (360°)',
    description:
      'Generating a synthetic dataset by rendering 3D objects with 360° images.',
    imageUrls: [images.python, images.blender],
    repositories: {
      gitRepository:
        'https://github.com/rogerramosruiz/synthetic-dataset-blender-hdri',
    },
  },
  {
    backgroundImage:
      'https://raw.githubusercontent.com/rogerramosruiz/portfolioimages/main/todo_app.png',
    title: 'Microservices To-Do App',
    description: 'A to-do app built with microservices and authentication',
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
    backgroundImage:
      'https://raw.githubusercontent.com/rogerramosruiz/portfolioimages/main/departamentos.png',
    title: "Web Scraping Bolivia's Municipalities",
    description: "Script to scrape data from all of Bolivia's municipalities.",
    imageUrls: [images.python, images.selenium],
    repositories: {
      gitRepository: 'https://github.com/rogerramosruiz/deparatamentos-bolivia',
    },
  },
]

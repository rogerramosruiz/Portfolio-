import React from 'react'
import { FaNodeJs } from 'react-icons/fa'
import { FaVuejs } from 'react-icons/fa6'
import { images } from '../lib/images'
import bgImage from '../images/bgImg.png'
import Card from '../components/Card'
export default function Projects() {
  return (
    <div>
      <Card
        backgroundImage={bgImage}
        title='3D object viwer'
        description='Visualize 3D objects from the browser '
        imageUrls={[images.node, images.vue, images.tailwindcss]}
        url='http://localhost:3000'
        repositories={{
          backeEndRepo: {
            url: 'http://github.com',
            icon: <FaNodeJs size={33} className='text-[#3c873a]' />,
          },
          frontEndRepo: {
            url: 'http://github.com',
            icon: <FaVuejs size={33} className='text-[#42b883]' />,
          },
        }}
      />
    </div>
  )
}

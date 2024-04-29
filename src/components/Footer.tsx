import React from 'react'
import { FaGithub, FaLinkedin, FaDocker } from 'react-icons/fa'
export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-4'>
      <div className='flex justify-center gap-4'>
        <a href='https://github.com/'>
          <FaGithub size={30} />
        </a>
        <a href='https://www.linkedin.com/'>
          <FaLinkedin size={30} />
        </a>
        <a href='https://hub.docker.com/'>
          <FaDocker size={30} />
        </a>
      </div>
    </footer>
  )
}

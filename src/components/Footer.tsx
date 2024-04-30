import React from 'react'
import { FaGithub, FaLinkedin, FaDocker } from 'react-icons/fa'
export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-4'>
      <div className='flex justify-center gap-4'>
        <a href='https://github.com/' target='_blank' rel='noreferrer'>
          <FaGithub size={30} />
        </a>
        <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
          <FaLinkedin size={30} />
        </a>
        <a href='https://hub.docker.com/' target='_blank' rel='noreferrer'>
          <FaDocker size={30} />
        </a>
      </div>
    </footer>
  )
}

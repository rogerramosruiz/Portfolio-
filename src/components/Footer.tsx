import React from 'react'
import { FaGithub, FaLinkedin, FaDocker } from 'react-icons/fa'
import Icon from './Icon'
export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-4'>
      <div className='flex justify-center gap-4'>
        <a href='https://github.com/' target='_blank' rel='noreferrer'>
          <Icon icon={<FaGithub />} />
        </a>
        <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
          <Icon icon={<FaLinkedin />} />
        </a>
        <a href='https://hub.docker.com/' target='_blank' rel='noreferrer'>
          <Icon icon={<FaDocker />} />
        </a>
      </div>
    </footer>
  )
}

import React from 'react'
import { FaGithub, FaLinkedin, FaDocker } from 'react-icons/fa'
import Icon from './Icon'
export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-4'>
      <div className='flex justify-center gap-4'>
        <a
          href='https://github.com/rogerramosruiz'
          target='_blank'
          rel='noreferrer'
        >
          <Icon icon={<FaGithub />} />
        </a>
        <a
          href='https://www.linkedin.com/in/roger-ramos-ruiz-86570b272'
          target='_blank'
          rel='noreferrer'
        >
          <Icon icon={<FaLinkedin />} />
        </a>
        <a href='https://hub.docker.com/u/rogerramosruiz' target='_blank' rel='noreferrer'>
          <Icon icon={<FaDocker />} />
        </a>
      </div>
    </footer>
  )
}

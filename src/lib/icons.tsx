import { FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { FaVuejs } from 'react-icons/fa6'
import { RiSvelteFill } from 'react-icons/ri'
import { SiDjango, SiFastapi, SiFlask } from 'react-icons/si'

export const icons = {
  vue: <FaVuejs size={33} className='text-[#42b883]' />,
  react: <FaReact size={33} className='text-[#61DBFB]' />,
  svelte: <RiSvelteFill size={33} className='text-[#ff3e00]' />,
  node: <FaNodeJs size={33} className='text-[#3c873a]' />,
  python: <FaPython size={33} className='text-[#ffde57]' />,
  django: <SiDjango size={33} className='text-[#0C4B33]' />,
  flask: <SiFlask size={33} className='text-white' />,
  fastapi: <SiFastapi size={33} className='text-[#05978a]' />,
}

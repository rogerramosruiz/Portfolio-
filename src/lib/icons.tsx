import { FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { FaVuejs } from 'react-icons/fa6'
import { RiSvelteFill } from 'react-icons/ri'
import { SiDjango, SiFastapi, SiFlask } from 'react-icons/si'
import Icon from '../components/Icon'
export const icons = {
  vue: (
    <div className='text-[#42b883] hover:text-emerald-300'>
      <Icon icon={<FaVuejs />} />
    </div>
  ),
  react: (
    <div className='text-[#61DBFB]'>
      <Icon icon={<FaReact />} />
    </div>
  ),
  svelte: (
    <div className='text-[#ff3e00] hover:text-orange-500'>
      <Icon icon={<RiSvelteFill />} />
    </div>
  ),
  node: (
    <div className='text-[#3c873a] hover:text-green-500'>
      <Icon icon={<FaNodeJs />} />
    </div>
  ),
  python: (
    <div className='text-[#ffde57]'>
      <Icon icon={<FaPython />} />
    </div>
  ),
  django: (
    <div className='text-[#0C4B33]'>
      <Icon icon={<SiDjango />} />
    </div>
  ),
  flask: (
    <div className='text-white hover:text-gray-300'>
      <Icon icon={<SiFlask />} />
    </div>
  ),
  fastapi: (
    <div className='text-[#05978a] hover:text-emerald-400'>
      <Icon icon={<SiFastapi />} />
    </div>
  ),
}

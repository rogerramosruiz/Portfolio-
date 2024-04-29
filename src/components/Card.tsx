import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { IoIosLink } from 'react-icons/io'

import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import { useRef } from 'react'

type CardProps = {
  backgroundImage: string
  title: string
  description: string
  imageUrls: string[]
  url?: string
  repositories: {
    gitRepository?: string
    backeEndRepo?: { url: string; icon: React.ReactNode }
    frontEndRepo?: { url: string; icon: React.ReactNode }
  }
  index: number
}
export default function Card({
  backgroundImage,
  title,
  description,
  imageUrls,
  url,
  repositories,
  index,
}: CardProps) {
  'grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4'

  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <motion.div
      ref={ref}
      style={{
        transform: isInView
          ? 'none'
          : `translateX(${index % 2 === 0 ? '-20rem' : '20rem'} )`,
        opacity: isInView ? 1 : -5,
        transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      className={`flex w-full ${
        index % 2 === 0 ? 'justify-start' : 'justify-end'
      }`}
    >
      <div
        className=' relative w-full md:w-4/6 lg:m-3/6 xl:w-6/12 bg-gray-100 group rounded-xl text-black/80
    hover:rounded-3xl transition-all duration-500 ease-linear mb-5 shadow-md  md:shadow-xl p-4 hover:text-gray-400 hover:bg-white '
      >
        <h1 className='text-xl font-bold text-center mb-4'>{title}</h1>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-5'>
          <img
            className='rounded-xl'
            src={backgroundImage}
            alt='Project'
            width={400}
          />
          <p className=''>{description}</p>
        </div>
        <div
          className='absolute top-0 left-0 bg-black h-full w-full bg-opacity-0 scale-0 
      group-hover:bg-opacity-65 group-hover:scale-100 opacity-85 transition-all duration-300 
      origin-bottom group-hover:rounded-3xl ease-linear backdrop-blur-[2px]'
        >
          <div className='h-full flex items-center px-2'>
            <div className='w-full'>
              <div className='flex justify-center'>
                <div
                  className={`grid grid-cols-${Math.min(
                    imageUrls.length,
                    4
                  )} justify-items-center place-content-center gap-2`}
                >
                  {imageUrls.map((val, i) => (
                    <img
                      key={i}
                      src={val}
                      alt=''
                      style={{
                        height: `${imageUrls.length < 3 ? '50px' : '40px'}`,
                        width: 'auto',
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className='flex justify-center mt-5 gap-4 text-slate-100 items-center'>
                <div>
                  <div className='flex justify-center gap-3 mb-3'>
                    {repositories?.gitRepository ? (
                      <a
                        href={repositories.gitRepository}
                        target='_blank'
                        rel='noreferrer'
                        className='hover:text-white'
                      >
                        <FaGithub size={35} />
                      </a>
                    ) : (
                      <FaGithub size={35} />
                    )}
                  </div>
                  {repositories?.frontEndRepo && repositories.frontEndRepo && (
                    <div className='flex justify-center gap-3'>
                      <a
                        href={repositories.backeEndRepo?.url}
                        target='_blank'
                        rel='noreferrer'
                        title='Back-End'
                        className='text-gray-200 hover:text-white'
                      >
                        {repositories.backeEndRepo?.icon}
                        </a>
                      <a
                        href={repositories.frontEndRepo.url}
                        rel='noreferrer'
                        target='_blank'
                        title='Front-End'
                        className='text-gray-200 hover:text-white'
                      >
                        {repositories.frontEndRepo?.icon}
                      </a>
                    </div>
                  )}
                </div>
                {url && (
                  <a
                    href={url}
                    target='_blank'
                    rel='noreferrer'
                    className='hover:text-white'
                  >
                    <IoIosLink size={35} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

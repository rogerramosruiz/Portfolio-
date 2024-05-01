import React from 'react'
import Card from '../components/Card'
import { projects } from '../lib/projects'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <div className='p-5'>
      <h1 className='font-bold text-6xl text-center py-10 underline'>Projects</h1>
      {projects.map((project, i) => (
        <motion.div animate='show' className='overflow-hidden mx-5 xl:mx-28'>
          <Card {...project} index={i} />
        </motion.div>
      ))}
    </div>
  )
}

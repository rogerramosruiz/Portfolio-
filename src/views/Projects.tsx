import React from 'react'
import Card from '../components/Card'
import { projects } from '../lib/projects'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <div>
      {projects.map((project, i) => (
        <motion.div animate='show' className='overflow-hidden mx-5 xl:m-28'>
          <Card {...project} index={i} />
        </motion.div>
      ))}
    </div>
  )
}

import React from 'react'
import Card from '../components/Card'
import { projects } from '../lib/projects'
export default function Projects() {
  return (
    <div>
      {projects.map((project, i) => (
        <Card {...project} />
      ))}
    </div>
  )
}

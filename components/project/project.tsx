import React from 'react'
import Title from '../title'
import ProjectsCard from './projects-card'

const Project = () => {
  return (
    <div className='text-center '>
       <Title className='text-3xl 2xl:text-8xl xl:text-6xl'>My Projects</Title>
        <p className='text-xs lg:px-60 my-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nemo aperiam corrupti quia! Ab voluptate illo odio in sol</p>
        <div >
            <ProjectsCard/>
        </div>
    </div>
  )
}

export default Project
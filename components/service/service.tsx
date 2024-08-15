import React from 'react'
import Title from '../title'
import ServiceTile from './service-tile'


const Service = () => {
  return (
    <div className='text-center '>
        <Title className='text-3xl 2xl:text-8xl xl:text-6xl'>Services</Title>
        <p className='text-xs lg:px-60 my-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nemo aperiam corrupti quia! Ab voluptate illo odio in sol</p>
        <div>
            <ServiceTile/>
        </div>
    </div>
  )
}

export default Service
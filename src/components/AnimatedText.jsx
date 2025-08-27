import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const AnimatedText = () => {
  return (
    <div className="text-xl md:text-2xl text-dark-300 mb-8 font-medium h-8">
      <TypeAnimation
        sequence={[
          'Full Stack Developer',
          2000,
          'React Specialist',
          2000,
          'Node.js Expert',
          2000,
          'AWS Cloud Engineer',
          2000,
          'Mobile App Developer',
          2000,
          'API Integration Specialist',
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="gradient-text"
      />
    </div>
  )
}

export default AnimatedText
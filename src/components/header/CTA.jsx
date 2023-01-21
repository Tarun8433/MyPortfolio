import React from 'react'
import './header.css'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} target="_blank" dwonload className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Lets's Talk</a>
    </div>
  )
}

export default CTA
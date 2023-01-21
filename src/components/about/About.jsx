import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg' 
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'> 
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ Years Working</small>
            </article>

            <article className='about__card'> 
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>3+ Clients</small>
            </article>

            <article className='about__card'> 
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>6+ Completed</small>
            </article>
          </div>
          <p>
            I’m a software engineer specializing in UI/UX designing, bulding web applications, 
            and corently learning application development for android and ios. I also do Graphis Designing 
            and video editing as Hobby. 
          </p>

          <a href="#contact" className='btn btn-primary'>Lets's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
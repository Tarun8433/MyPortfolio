import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conducting user research.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating wireframes and mockups.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Designing user interfaces.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Interaction design.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Usability testing.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Collaborating with developers.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Keeping up with design trends.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating design guidelines.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating assets.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Continuously evaluating.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Graphic Design & Video Editing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, illo corporis.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, illo corporis.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, illo corporis.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, illo corporis.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Android & IOS App Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, illo corporis.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, illo corporis.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, illo corporis.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
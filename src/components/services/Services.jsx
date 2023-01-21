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
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website design and development.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>E-commerce development.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content management system.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive design.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web hosting and maintenance.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database integration.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integration with third-party services such as Payment gateways.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website maintenance and updates.</p>
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
              <p>Mobile app design.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cross-platform app development.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>E-commerce app development.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content management systems integration.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Push notifications and in-app messaging.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>API integration.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cloud-based solutions.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>App maintenance and updates.</p>
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
              <p>Video editing.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Color grading and color correction.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Motion graphics and visual effects.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Branding and identity design, including logos.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website and digital design.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Social Media design.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
import React from 'react'
import './footer.css'
import {CiLinkedin} from 'react-icons/ci'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footar_logo'>TARUN</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/tarun-sahani-436190210/" target="_blank"><CiLinkedin/></a>
        <a href="https://github.com/Tarun8433" target="_blank"><AiOutlineGithub/></a>   
        <a href="https://m.facebook.com/100015363316643/" target="_blank"><AiOutlineFacebook/></a>        
        <a href="https://instagram.com/tarun_shani?igshid=YmMyMTA2M2Y=" target="_blank"><AiOutlineInstagram/></a>       
        <a href="https://api.whatsapp.com/send?phone+918433145573" target="_blank"><BsWhatsapp/></a>
      </div>

      <div className="footar__copyright">
        <small>&copy; Tarun. All rights</small>
      </div>

    </footer>
  )
}

export default Footer
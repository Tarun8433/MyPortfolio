import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import './header.css'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/tarun-sahani-436190210/" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/Tarun8433" target="_blank"><FaGithubSquare/></a>
        <a href="https://instagram.com/tarun_shani?igshid=YmMyMTA2M2Y=" target="_blank"><FaInstagramSquare/></a>
    </div>
  )
}

export default HeaderSocials
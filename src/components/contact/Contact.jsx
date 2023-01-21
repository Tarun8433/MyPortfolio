import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {CiLinkedin} from 'react-icons/ci'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

      const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ik26hx7', 'template_4tu999f', form.current, 'rBz9afiRw0iand6ck')
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  
  return (
    <section id="contact">
      
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>tarunshani0000@gmail.com</h5>
          <a href="mailto:tarunshani0000@gamil.com">Send a Message</a>
        </article>

        <article className="contact__option">
          <CiLinkedin className='contact_option-icon'/>
          <h4>Linkdin</h4>
          <h5>Tarun Sahani</h5>
          <a href="https://linkdin.com" target="_blank">Send a Message</a>
        </article>
        
        <article className="contact__option">
          <AiOutlineInstagram className='contact_option-icon'/>
          <h4>Instagram</h4>
          <h5>tarun_Shani</h5>
          <a href="https://instagram.com" target="_blank">Send a Message</a>
        </article>

        <article className="contact__option">
          <AiOutlineWhatsApp className='contact_option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+91 8433145573</h5>
          <a href="https://api.whatsapp.com/send?phone+918433145573" target="_blank">Send a Message</a>
        </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />  
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button title='submit' className='btn btn-primary'>Send Message</button>
        </form> 
      </div>
    </section>
  )
}

export default Contact
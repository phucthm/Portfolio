import React from 'react'
import logo from '../asset/logo.png';
import parrot from '../asset/parrot.png';
import vine from '../asset/line.png'
import LogoutBut from '../subComponents/logoutBut';
import { motion } from 'framer-motion';
import '../CSS/Pages.css';
import '../asset/fontawesome-free-6.2.1-web/css/all.min.css'

const ContactPage = () => {
  return (
    <div>
      <LogoutBut />
      <div className='decorContact--left'>
        <img src={parrot} alt='parot' className='parrot--right'/>
        <img src={vine} alt='vine' className='vine--right'/>

        <img src={parrot} alt='parot' className='parrot--left'/>
        <img src={vine} alt='vine' className='vine--left'/>
      </div>

      <img src={logo} alt='logo' className='logo logo__small'/>

      <motion.div className='ContactContent--cover'
        initial={{
          y: 800,
          transition: { type:'spring', duration: 1.5, delay:0.5}
        }}
        animate={{
          y:0,
          transition: { type:'spring', duration: 1.5, delay:0.5} 
      }}> 
        <div className='Contact--Title'>
            Contact information
        </div>

        <strong>Email</strong>

        <div className='ContactContent--infor'>
          <div>
            <i class="fa-regular fa-envelope contact-icon"></i>
            phuctm@gmail.com
          </div>
          <div>
            <i class="fa-regular fa-envelope contact-icon"></i>
            meohoang049@gmail.com
          </div>
          <div>
            <i class="fa-regular fa-envelope contact-icon"></i>
            thmphuc0805@gmail.com
          </div>
        </div>

        <strong>Phone</strong>

        <div className='ContactContent--infor'>
          <i class="fa-solid fa-phone contact-icon"></i>
          0886017400
        </div>

      </motion.div>

    </div>
  )
}

export default ContactPage
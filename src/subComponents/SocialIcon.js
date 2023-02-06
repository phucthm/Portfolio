import React from 'react'
import '../asset/fontawesome-free-6.2.1-web/css/all.min.css'
import line from '../asset/line.png'
import '../CSS/subcomponent.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const SocialIcon = () => {
  return (
    <div className='ScocialContainer'>
        <motion.div className='ScocialContainer-list'
          initial={{
            x: 700,
            transition: {type: 'spring', duration: 1, delay: 1}
          }}
          animate={{
            x: 0,
            transition: {type: 'spring', duration: 1, delay: 1}
          }}>

          <NavLink target='_blank' to='https://www.facebook.com/tranhongminhphuc.vn/'>
            <i className="fa-brands fa-facebook social-icon"></i>
          </NavLink>
            
          <NavLink target='_blank' to='https://github.com/phucthm'>
            <i className="fa-brands fa-github social-icon"></i>
          </NavLink>

          <NavLink target='_blank' to='https://www.youtube.com/channel/UCMsrbo6aCndRjJRpXap6aUA'>
            <i className="fa-brands fa-youtube social-icon"></i>
          </NavLink>

          <NavLink target='_blank' to='https://www.instagram.com/tran_phuc_0805/'>
            <i className="fa-brands fa-instagram social-icon"></i>
          </NavLink>

        </motion.div>
        <img src={line} alt='line' className='SocialLine'/>
    </div>
  )
}

export default SocialIcon
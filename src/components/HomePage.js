import React from 'react';
import '../CSS/App.css';
import LogoutBut from '../subComponents/logoutBut';
import line from '../asset/line.png';
import SocialIcon from '../subComponents/SocialIcon';
import logo from '../asset/logo.png'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import BigTitle from '../subComponents/BigTitle';

const HomePage = () => {
  return (
    <div className='HomeContainer'>
      <LogoutBut />
      <BigTitle text='Home Page'  top='65%' left='20%' pos='500' cor='#40f5be'/>

      <img src={line} alt='vine' className='contactLine'/>

      <motion.div
                  initial={{
                    y:-500,
                    transition: { type:'spring', duration: 1.5, delay:0.5}
                  }}
                  animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:0.5}
                  }}> 
        <NavLink to='/Contact' className='box box--contact'>
          Contact
        </NavLink>
      </motion.div>

      <motion.div
            initial={{
              y: 800,
              transition: { type:'spring', duration: 1.5, delay:0.5}
            }}
            animate={{
              y:0,
              transition: { type:'spring', duration: 1.5, delay:0.5} 
            }}> 
        <NavLink to='/Skills' className='box box--skills'>
          Skills
        </NavLink>
      </motion.div>      
      <img src={line} alt='vine' className='skillsLine'/>

      <motion.div
            initial={{
              y: 800,
              transition: { type:'spring', duration: 1.5, delay:0.5}
            }}
            animate={{
              y:0,
              transition: { type:'spring', duration: 1.5, delay:0.5}
            }}> 
        <NavLink to='/Projects' className='box box--projects'>
          Projects
        </NavLink>
      </motion.div>
      <img src={line} alt='vine' className='projectLine'/>

      <motion.div 
            initial={{
              y:400,
              transition: { type:'spring', duration: 1.5, delay:0.5}
            }}
            animate={{
              y:0,
              transition: { type:'spring', duration: 1.5, delay:0.5}
            }}>

        <NavLink to='/AboutMe' className='box box--aboutMe'>        
          About Me
        </NavLink>
      </motion.div>
      <img src={line} alt='vine' className='aboutMeLine'/>

      <SocialIcon />
      
      <NavLink to='SayHi'>
        <img src={logo} alt='logo' className='logo'/>
      </NavLink>
    </div>
  )
}

export default HomePage
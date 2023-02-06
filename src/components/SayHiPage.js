import React from 'react'
import { motion } from 'framer-motion'
import '../CSS/App.css'
import '../CSS/Pages.css'
import logo from '../asset/logo.png'
import phuc from '../asset/Phuc.png'
import lineCover from '../asset/lineCover.png'
import LogoutBut from '../subComponents/logoutBut'

const SayHiPage = () => {
  return (
    <div>
      <LogoutBut />
      <img src={logo} alt='logo' className='logo logo__small'/>

      <motion.div className='coverContent'
        initial={{
          y:1000,
          transition: {type:'spring', duration: 1, delay: 0.5}          
        }}
        animate={{
          y:0,
          transition: {type:'spring', duration: 1, delay: 0.5}    
        }}
        >
        <img src={phuc} alt='me ' className='myself'/>
        <div className='sayHiContent'>
          <div className='sayHiText__H1'>
            Hi,
          </div>
          <div className='sayHiText__H2'>
            I’m Joseph Tran
          </div>
          <div className='sayHiText__H3'>
            and I code simple yet beautiful websites.
          </div>
        </div>

        <img src={lineCover} alt='cover' className='lineCover--topLeft'/>
        <img src={lineCover} alt='cover' className='lineCover--botRight'/>
      </motion.div>

    </div>
  )
}

export default SayHiPage
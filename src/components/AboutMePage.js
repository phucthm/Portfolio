import React from 'react'
import { motion } from 'framer-motion'
import AmongUs from '../subComponents/amongusParticle'
import { NavLink } from 'react-router-dom'
import '../CSS/Pages.css'
import sus from '../asset/amongus.png'

const AboutMePage = () => {
  return (
    
    <div>
      <AmongUs />
      <motion.div className='coverIconAboutMe'
              initial={{
                y:-500,
                transition: { type:'spring', duration: 1, delay:1} 
              }}
              animate={{
                y:0,
                transition: { type:'spring', duration: 1, delay:1}
              }}
            >
              <NavLink to='/'>
                <i className="fa-solid fa-power-off font-icon Aboutme-logout"></i>
              </NavLink>
        </motion.div>

        <img src={sus} alt='sus' className='sus'/>


        <motion.div className='aboutMeContent'
                      initial={{
                        y:1500,
                        transition: { type:'spring', duration: 1, delay:0.5} 
                      }}
                      animate={{
                        y:0,
                        transition: { type:'spring', duration: 1, delay:0.5}
                      }}>
            <div className='aboutMeContent--text'>
              I’m a front-end developer in Dong Nai. 
              I’m currently a third year college student at University of Science.
              And I love to build and create beautiful user-interface.
            </div>

            <div className='aboutMeContent--text'>
              I love creating user-friendly interfaces and I love creating new things. 
              I want to make a simple and modern view to the user. 
              I enjoy building and doing great projects. 
            </div>

            <div className='aboutMeContent--text'>
              I love to see the beauty of the world. 
              From the beauty of nature to people, I want to explore them.
            </div>
        </motion.div>

    </div>
  )
}

export default AboutMePage
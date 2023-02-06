import React from 'react'
import Projects from '../subComponents/ProjectsData'
import '../CSS/Pages.css';
import LogoutBut from '../subComponents/logoutBut';
import Particle from '../subComponents/Particle';
import { motion } from 'framer-motion';


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Item = {
  hidden:{
      scale:0
  },
  show:{
      scale:1,
      transition: {
          type: 'spring',
          duration: 0.5
      }
  }
}

const DisplayProject = props =>(
  <motion.div className='ProjectData--cover' key={props.key} variants={Item}>
    <div className='ProjectData--Name'>
      {props.name}
    </div>
    <div className='ProjectData--Des'>
      {props.des}
    </div>
    <div className='ProjectData--Lang'>
      <div className='border'></div>
      {props.lang}
    </div>
  </motion.div>
)



const ProjectsPage = () => {
  return (
    <div className='ProjectData--Box'  >
      <Particle />
      <LogoutBut />
      <motion.ul className='ProjectData' variants={container} initial="hidden" animate="show">
        {
          Projects.map( project => (
            <DisplayProject 
              key = {project.id}
              name = {project.Name}
              des = {project.describe}
              lang = {project.language}
            />
          )
          )
        }
      </motion.ul>

    </div>
  )
}

export default ProjectsPage
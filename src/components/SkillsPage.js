import React from 'react';
import logo from '../asset/logo.png';
import LogoutBut from '../subComponents/logoutBut';
import { motion } from 'framer-motion';
import '../CSS/Pages.css';
import  SkillsData  from '../subComponents/SkillsData' ;
import BigTitle from '../subComponents/BigTitle';

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

const DisplaySkills = props =>(
  <motion.div className='SkillsContent--cover' key={props.key} variants={Item}>
  
    <div className='SkillContent--Name'>
      <div className='SkillContent--Icon'>
        {props.Icon}
      </div>
      {props.SkillName}
    </div>

    <div className='SkillContent--Des'>
      {props.Description}
    </div>

    <div className='SkillContent--Skills-Tools'>
      <div className='SkillContent--Skills-Tools__font'>
        Skills
      </div>
      <li className='SkillContent--Skills-Tools--place'>    
        {props.Skills}
      </li>
    </div>

    <div className='SkillContent--Skills-Tools'>
      <div className='SkillContent--Skills-Tools__font'>
        Tools
      </div>
      <li className='SkillContent--Skills-Tools--place'>    
        {props.Tool}
      </li>
    </div>

  </motion.div>
)

const SkillsPage = () => {
  return (
    <div className='SkillPage'>
      <LogoutBut />
      <BigTitle text='Skills'  top='75%' left='20%' pos='500' cor='#4094f5'/>

      <img src={logo} alt='logo' className='logo logo__small'/>
      <motion.div className='SkillsContent' variants={container} initial="hidden" animate="show"    >
        {SkillsData.map(Skills => ( 
          <DisplaySkills
            key = {Skills.id}
            SkillName ={Skills.Skill_Name}
            Description = {Skills.Des}
            Skills = {Skills.Skills}
            Tool = {Skills.Tools}
            Icon = {Skills.icon}
          />
        )
        )}
      </motion.div>
    </div>
  )
}

export default SkillsPage
import React from 'react';
import '../asset/fontawesome-free-6.2.1-web/css/all.min.css';
import '../CSS/subcomponent.css';
import line from'../asset/line.png' 
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const LogoutBut = () => {
  return (
    <div className='logoutCover' >
        <div className='logoutCover-item'>
            <img src={line} alt='vine' className='powerLine'/>
            <motion.div className='coverIcon'
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
                <i className="fa-solid fa-power-off font-icon"></i>
              </NavLink>
            </motion.div>
        </div>
    </div>
  );
}

export default LogoutBut
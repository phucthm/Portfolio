import React from 'react'
import ConfigDark from "../config/amongus-config.json";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../CSS/subcomponent.css'

const AmongUs = () => {

    const particlesInit = async (main) => {
        await loadFull(main);
    };

  return (

    <div className='particle'>
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        params={ConfigDark}
        init={particlesInit} 
      />
    </div>
  );
}

export default AmongUs 
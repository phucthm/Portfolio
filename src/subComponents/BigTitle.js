import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Title = styled.h1`
    position: fixed;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right}; 
    color: ${props => props.color};
    font-size: calc(4rem + 4vw);
    z-index:0;
    cursor: default;
    &:hover{
        color: #ffff61;
    }
`


const BigTitle = (props) => {
  return (
    <Title top={props.top}  left={props.left}  right={props.right} color={props.cor}>
        <motion.div
            initial={{
                y:props.pos,
                transition: { type:'spring', duration: 1.5, delay:0.5}
            }}
            animate={{
                y:0,
                transition: { type:'spring', duration: 1.5, delay:0.5}
            }}
        >
            {props.text}
        </motion.div>
    </Title>
  )
}

export default BigTitle
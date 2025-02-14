import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import AnimatedImage from "./AnimatedImage";

const Hero = () => {
  return (
    <HeroContainer>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        The Future of Car Wraps
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 1 }}
      >
        Ultra-thin. Ultra-sleek. Ultra-durable.
      </motion.p>

      {/* Replace static motion.img with AnimatedImage */}
      <AnimatedImage />

      <motion.button 
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        Explore Now
      </motion.button>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  button {
    background: white;
    color: black;
    font-size: 18px;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
  }
`;

export default Hero;

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <HeroContainer>
      <Overlay />
      <ContentWrapper>
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
        <motion.button 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Explore Now
        </motion.button>
      </ContentWrapper>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: url(${process.env.PUBLIC_URL + "/images/car.jpg"}) no-repeat center center/cover;
  color: white;
  text-align: center;
  padding: 20px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay for contrast */
  z-index: 1;
`;

const ContentWrapper = styled.div`
  z-index: 2;
  position: relative;
  
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

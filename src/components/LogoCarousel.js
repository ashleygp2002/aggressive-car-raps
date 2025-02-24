import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Logo Images
const logos = [
  "/images/bmw.png",
  "/images/mercede.png",
  "/images/porsche.png",
  "/images/audi.png",
  "/images/Lamborghini.png",
  "/images/ferrari.png",
  "/images/royce.png",
  "/images/tesla2.png",
  "/images/bentley.png",
  "/images/bugatti.png",
];

const LogoCarousel = () => {
  return (
    <CarouselContainer>
      <Track>
        <motion.div
          className="logo-track"
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}  // 🔹 Moves half instead of full to create seamless loop
          transition={{
            repeat: Infinity,
            duration: 10,  // 🔹 Adjust speed
            ease: "linear",
          }}
        >
          {/* 🔹 Duplicate logos for seamless infinite loop */}
          {[...logos, ...logos].map((logo, index) => (
            <Logo key={index} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </motion.div>
      </Track>
    </CarouselContainer>
  );
};

// Styled Components
const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background: black;
  padding: 10px 0;  // 🔹 Reduced padding to remove black space
`;

const Track = styled.div`
  display: flex;
  width: 200%;  // 🔹 Makes sure there's no gap in loop
`;

const Logo = styled.img`
  height: 50px;
  margin: 0 40px;  // 🔹 Adjust spacing between logos
  display: inline-block;
`;

export default LogoCarousel;

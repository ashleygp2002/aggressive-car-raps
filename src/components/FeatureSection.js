import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureSection = ({ title, description, imgSrc, reverse }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Section ref={ref} reverse={reverse}>
      <motion.div 
        className="text"
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : reverse ? -50 : 50 }}
        transition={{ duration: 1 }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </motion.div>
      <motion.img 
        src={imgSrc} 
        alt={title} 
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : reverse ? 50 : -50 }}
        transition={{ duration: 1 }}
      />
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: center;
  padding: 80px 10%;
  background: black;
  color: white;

  .text {
    width: 50%;
  }

  h2 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-top: 10px;
  }

  img {
    width: 40%;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    .text {
      width: 100%;
    }
    img {
      width: 80%;
    }
  }
`;

export default FeatureSection;

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Vinyl Car Wrapping",
    description:
      "Transform the look of your car with Aggressive's Vinyl Car Wrapping service in Los Angeles. Whether you're seeking a color change or a unique design, we can make it happen with our high-quality vinyl materials and expert installation. This service protects your car's original paint while giving it a fresh new look.",
    image: "https://source.unsplash.com/900x600/?sports-car",
  },
  {
    title: "Paint Protection",
    description:
      "Protect your investment with Aggressive's Paint Protection service. Our clear film protection is the perfect way to safeguard your car's paint from scratches, chips, and other types of damage. Our experts will create a customized protection plan to keep your car safe for years.",
    image: "https://source.unsplash.com/900x600/?luxury-car",
  },
  {
    title: "Commercial Wrapping",
    description:
      "Make your business and brand stand out with Aggressive's Commercial Wrapping service. Our specialists have years of experience in commercial wrapping and can help you create a customized design that will grab attention and increase brand recognition.",
    image: "https://source.unsplash.com/900x600/?business-car",
  },
  {
    title: "Custom Wrap Design",
    description:
      "Express your unique style with Aggressive's Custom Wrap Design service. Whether you're looking for a bold graphic or a subtle pattern, we’ll bring your vision to life and make your car stand out from the crowd.",
    image: "https://source.unsplash.com/900x600/?custom-car",
  },
];

const ServicesSection = () => {
  return (
    <SectionContainer>
      {services.map((service, index) => (
        <ServiceItem key={index} service={service} reverse={index % 2 !== 0} />
      ))}
    </SectionContainer>
  );
};

// ✅ NEW COMPONENT: Fixes the useInView issue
const ServiceItem = ({ service, reverse }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <StyledServiceItem reverse={reverse} ref={ref}>
      <motion.div
        className="text-content"
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : reverse ? 100 : -100 }}
        transition={{ duration: 1 }}
      >
        <h2>{service.title}</h2>
        <p>{service.description}</p>
      </motion.div>

      <motion.img
        src={service.image}
        alt={service.title}
        initial={{ opacity: 0, x: reverse ? -100 : 100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : reverse ? -100 : 100 }}
        transition={{ duration: 1 }}
      />
    </StyledServiceItem>
  );
};

// Styled Components
const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  color: white;
  padding: 50px 0;
`;

const StyledServiceItem = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding: 80px 0;

  .text-content {
    width: 50%;
    text-align: ${({ reverse }) => (reverse ? "right" : "left")};
  }

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    margin-top: 10px;
    line-height: 1.6;
  }

  img {
    width: 45%;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    .text-content {
      width: 100%;
    }
    img {
      width: 100%;
    }
  }
`;

export default ServicesSection;

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const services = [
  {
    title: "Vinyl Car Wrapping",
    description:
      "Transform the look of your car with Aggressive's Vinyl Car Wrapping service in Los Angeles. Whether you're seeking a color change or a unique design, we can make it happen with our high-quality vinyl materials and expert installation. This service protects your car's original paint while giving it a fresh new look.",
    images: [
      "/images/pink1.png",
      "/images/pink2.png",
      "/images/pink3.png",
      "/images/pink4.png",
    ],
  },
  {
    title: "Paint Protection",
    description:
      "Protect your investment with Aggressive's Paint Protection service. Our clear film protection is the perfect way to safeguard your car's paint from scratches, chips, and other types of damage. Our experts will create a customized protection plan to keep your car safe for years.",
    images: [
      "/images/lambo1.png",
      "/images/lambo2.png",
      "/images/lambo3.png",
      "/images/lambo4.png",
    ],
  },
  {
    title: "Commercial Wrapping",
    description:
      "Make your business and brand stand out with Aggressive's Commercial Wrapping service. Our specialists have years of experience in commercial wrapping and can help you create a customized design that will grab attention and increase brand recognition.",
    images: [
      "/images/image1.png",
      "/images/image2.png",
      "/images/image3.png",
      "/images/image4.png",
    ],
  },
  {
    title: "Custom Wrap Design",
    description:
      "Express your unique style with Aggressive's Custom Wrap Design service. Whether you're looking for a bold graphic or a subtle pattern, we’ll bring your vision to life and make your car stand out from the crowd.",
    images: [
      "/images/jeep1.png",
      "/images/jeep5.png",
      "/images/jeep2.png",
      "/images/jeep3.png",
      "/images/jeep4.png",
    ],
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

// ✅ NEW COMPONENT: Uses Swiper to create an image slider
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

      <motion.div
        className="swiper-container"
        initial={{ opacity: 0, x: reverse ? -100 : 100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : reverse ? -100 : 100 }}
        transition={{ duration: 1 }}
      >
        <Swiper navigation={true} modules={[Navigation]} className="service-swiper">
          {service.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Service ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
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

  .swiper-container {
    width: 45%;
  }

  .service-swiper {
    width: 100%;
    height: 250px;
  }

  img {
    width: 100%;
    height: 250px;
    border-radius: 10px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    .text-content {
      width: 100%;
    }

    .swiper-container {
      width: 100%;
    }
  }
`;

export default ServicesSection;

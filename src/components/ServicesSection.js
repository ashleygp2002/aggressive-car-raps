import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("servicesSection.vinyl_car_wraps.title"),
      description: t("servicesSection.vinyl_car_wraps.description"),
      images: [
        "/images/pink1.png",
        "/images/pink2.png",
        "/images/pink3.png",
        "/images/pink4.png",
      ],
    },
    {
      title: t("servicesSection.paint_protection_film.title"),
      description: t("servicesSection.paint_protection_film.description"),
      images: [
        "/images/lambo1.png",
        "/images/lambo2.png",
        "/images/lambo3.png",
        "/images/lambo4.png",
      ],
    },
    {
      title: t("servicesSection.commercial_wraps.title"),
      description: t("servicesSection.commercial_wraps.description"),
      images: [
        "/images/image1.png",
        "/images/image2.png",
        "/images/image3.png",
        "/images/image4.png",
      ],
    },
    {
      title: t("servicesSection.custom_wrap_design.title"),
      description: t("servicesSection.custom_wrap_design.description"),
      images: [
        "/images/jeep1.png",
        "/images/jeep5.png",
        "/images/jeep2.png",
        "/images/jeep3.png",
        "/images/jeep4.png",
      ],
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle>{t("servicesSection.title")}</SectionTitle>
      {services.map((service, index) => (
        <ServiceItem key={index} service={service} reverse={index % 2 !== 0} />
      ))}
    </SectionContainer>
  );
};

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
        <ServiceTitle>{service.title}</ServiceTitle>
        <ServiceDescription>{service.description}</ServiceDescription>
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
              <ServiceImage src={image} alt={`Service ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </StyledServiceItem>
  );
};

// Styled Components (Preserving Original Style)
const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  color: white;
  padding: 50px 0;
`;

const SectionTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
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

  .swiper-container {
    width: 45%;
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

const ServiceTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
  line-height: 1.6;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
`;

export default ServicesSection;

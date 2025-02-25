import React from "react";
import { useTranslation } from "react-i18next"; // Import translation hook
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoCarousel from "../components/LogoCarousel";


// Image paths (stored in public/images)
const images = [
  "/images/slider1.png",
  "/images/slider2.png",
  "/images/slider3.png",
  "/images/slider4.png",
  "/images/slider5.png",
  "/images/slider6.png",
  "/images/slider7.png",
  "/images/slider8.png",
  "/images/slider9.png",
];

const About = () => {
  const { t } = useTranslation(); // Translation hook

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <AboutContainer>
      <IntroSection>
        <h1>{t("about.title")}</h1>
        <p>{t("about.subtitle")}</p>
      </IntroSection>

      {/* 🔹 Mini History Section */}
      <HistorySection>
        <h2>{t("about.legacyTitle")}</h2>
        <p>{t("about.legacyDescription1")}</p>
        <p>{t("about.legacyDescription2")}</p>
      </HistorySection>

      {/* 🔹 Our Work Section */}
      <WorkSection>
        <h2>{t("about.workTitle")}</h2>
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <ImageWrapper key={index}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </ImageWrapper>
          ))}
        </Slider>
      </WorkSection>

      <LogoCarousel />
      
    </AboutContainer>
  );
};

// Styled Components
const AboutContainer = styled.div`
  padding: 50px;
  text-align: center;
  background: black;
  color: white;
`;

/* 🔹 Top Introduction Section */
const IntroSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 40px;

  h1 {
    font-size: 3rem;
    color: #ffcc00;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.3rem;
    line-height: 1.6;
  }
`;

/* 🔹 Mini History Section */
const HistorySection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 0;
  text-align: left;

  h2 {
    font-size: 2.5rem;
    color: #ffcc00;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 15px;
  }
`;

/* 🔹 Our Work Section */
const WorkSection = styled.div`
  width: 80%;
  margin: 0 auto;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #ffcc00;
  }
`;

const ImageWrapper = styled.div`
  padding: 10px;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.3);
  }
`;


export default About;

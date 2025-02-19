import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 images at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 images on tablets
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 image on mobile
        },
      },
    ],
  };

  return (
    <AboutContainer>
      <h1>About Us</h1>
      <p>Aggressive Car Wraps is dedicated to providing the best wrap services.</p>

      <SliderContainer>
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <ImageWrapper key={index}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </ImageWrapper>
          ))}
        </Slider>
      </SliderContainer>
    </AboutContainer>
  );
};

// Styled Components
const AboutContainer = styled.div`
  padding: 50px;
  text-align: center;
  background: black;
  color: white;

  h1 {
    font-size: 3rem;
    color: #ffcc00;
    margin-bottom: 20px;
    font-family: "Arial", sans-serif;
  }

  p {
    font-family: "Courier New", monospace;
    font-size: 1.2rem;
    margin-bottom: 40px;
  }
`;

const SliderContainer = styled.div`
  width: 80%;
  margin: 0 auto;
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

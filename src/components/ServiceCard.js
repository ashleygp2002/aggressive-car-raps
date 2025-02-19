import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Example images (replace with real images)
import img1 from "../assets/service1.jpg";
import img2 from "../assets/service2.jpg";
import img3 from "../assets/service3.jpg";

const ServiceCard = ({ title, images }) => {
  return (
    <Card>
      <h3>{title}</h3>
      <Swiper navigation={true} modules={[Navigation]} className="service-swiper">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Service ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  );
};

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  text-align: center;
  color: white;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  .service-swiper {
    width: 100%;
    height: 200px;
  }

  img {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export default ServiceCard;

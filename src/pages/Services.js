import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Services Data
const services = [
  {
    title: "Powder Coating",
    description:
      "A high-quality finish that enhances the durability and look of wheels, calipers, and other parts. Available in various colors and finishes.",
    image: "/images/powder_coating.jpg",
  },
  {
    title: "Paint Protection Film (PPF)",
    description:
      "A transparent, self-healing film that protects your car from scratches, chips, and road debris while maintaining its original paint.",
    image: "/images/paint_protection1.png",
    gallery: [
      "/images/paint_protection1.png",
      "/images/paint_protection2.png",
      "/images/paint_protection3.png",
      "/images/paint_protection4.png",
    ],
  },
  {
    title: "Calipers Color Change",
    description:
      "Transform your brake calipers with custom colors that match your car’s aesthetic. Options include matte, gloss, or metallic finishes.",
    image: "/images/calipers1.png",
  },
  {
    title: "Window Tinting",
    description:
      "Reduce glare, heat, and UV rays while enhancing privacy with premium-quality window tints in various shades.",
    image: "/images/window_tint.jpg",
  },
  {
    title: "Rim Repair",
    description:
      "Repair curb rash, scratches, and damages on your rims to restore their original factory look.",
    image: "/images/rim_repair.jpg",
  },
  {
    title: "Ceramic Coating",
    description:
      "A long-lasting liquid polymer applied to your car’s exterior for extreme shine, hydrophobic effects, and protection against dirt & contaminants.",
    image: "/images/ceramic_coating1.png",
  },
  {
    title: "Paint Correction",
    description:
      "Remove swirl marks, oxidation, and minor scratches to restore your car’s paint to a flawless, showroom finish.",
    image: "/images/paint_correction1.png",
  },
  {
    title: "Commercial Wraps",
    description: "Custom decals, vinyl wraps, and branding solutions for businesses and personal vehicles.",
    image: "/images/commercial_wraps1.png",  
    gallery: [
      "/images/commercial_wraps1.png",
      "/images/commercial_wraps2.png",
      "/images/commercial_wraps3.png",
    ],
  }
];

const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  const openGallery = (service) => {
    setSelectedService(service);
    setSelectedImage(service.image); // Default to main image
  };

  const closeGallery = () => {
    setSelectedService(null);
  };

  return (
    <Container>
      <h1>Our Services</h1>
      <p>Premium automotive care with cutting-edge technology.</p>
      <Grid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            {/* Main Image */}
            <motion.img
              src={service.image}
              alt={service.title}
              onClick={() => openGallery(service)}
              whileHover={{ scale: 1.05 }}
            />
            {/* Description */}
            <div className="text-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </ServiceCard>
        ))}
      </Grid>

      {/* Mini Display Window (Modal) */}
      {selectedService && (
        <ModalOverlay onClick={closeGallery}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeGallery}>&times;</CloseButton>
            
            {/* Thumbnail Gallery Above */}
            {selectedService.gallery && (
              <GalleryThumbnails>
                {selectedService.gallery.map((img, i) => (
                  <Thumbnail
                    key={i}
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    onClick={() => setSelectedImage(img)}
                    isSelected={selectedImage === img}
                  />
                ))}
              </GalleryThumbnails>
            )}

            {/* Large Display Image */}
            <MainImage src={selectedImage} alt="Selected Image" />
          </ModalContainer>
        </ModalOverlay>
      )}
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 50px 20px;
  background: black;
  color: white;

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }

  p {
    font-size: 1.3rem;
    color: #ccc;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 50px 10px;
  max-width: 1200px;
  margin: auto;
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .text-content {
    padding: 20px 0;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #ddd;
  }
`;

/* 🔹 MODAL STYLES */
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  max-height: 80%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

/* 🔹 Gallery Thumbnails */
const GalleryThumbnails = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  border: ${(props) => (props.isSelected ? "2px solid white" : "none")};
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

/* 🔹 Main Image */
const MainImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
`;

export default ServicesGrid;

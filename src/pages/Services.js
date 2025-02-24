import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook
import styled from "styled-components";
import { motion } from "framer-motion";

const ServicesGrid = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  const services = [
    {
      title: t("services.paint_protection.title"),
      description: t("services.paint_protection.description"),
      image: "/images/paint_protection1.png",
      gallery: [
        "/images/paint_protection1.png",
        "/images/paint_protection2.png",
        "/images/paint_protection3.png",
        "/images/paint_protection4.png",
        "/images/paint_protection5.png",
        "/images/paint_protection6.png",
      ],
    },
    {
      title: t("services.calipers_color.title"),
      description: t("services.calipers_color.description"),
      image: "/images/calipers1.png",
      gallery: [
        "/images/calipers1.png",
        "/images/calipers2.png",
      ],
    },
    {
      title: t("services.powder_coating.title"),
      description: t("services.powder_coating.description"),
      image: "/images/powder_coating1.png",
      gallery: [
        "/images/powder_coating1.png",
        "/images/powder_coating2.png",
      ],
    },
    {
      title: t("services.window_tint.title"),
      description: t("services.window_tint.description"),
      image: "/images/window_tint.jpg",
    },
    {
      title: t("services.ceramic_coating.title"),
      description: t("services.ceramic_coating.description"),
      image: "/images/ceramic_coating1.png",
      gallery: [
        "/images/rim_repair.jpg",
      ],
    },
    {
      title: t("services.paint_correction.title"),
      description: t("services.paint_correction.description"),
      image: "/images/paint_correction1.png",
    },
    {
      title: t("services.commercial_wraps.title"),
      description: t("services.commercial_wraps.description"),
      image: "/images/commercial_wraps1.png",
      gallery: [
        "/images/commercial_wraps1.png",
        "/images/commercial_wraps2.png",
        "/images/commercial_wraps3.png",
      ],
    }
  ];

  const openGallery = (service) => {
    setSelectedService(service);
    setSelectedImage(service.image);
  };

  const closeGallery = () => {
    setSelectedService(null);
  };

  return (
    <Container>
      <h1>{t("services.title")}</h1>
      <p>{t("services.subtitle")}</p>
      <Grid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <motion.img
              src={service.image}
              alt={service.title}
              onClick={() => openGallery(service)}
              whileHover={{ scale: 1.05 }}
            />
            <div className="text-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </ServiceCard>
        ))}
      </Grid>

      {selectedService && (
        <ModalOverlay onClick={closeGallery}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeGallery}>&times;</CloseButton>

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

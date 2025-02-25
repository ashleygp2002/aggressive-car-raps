import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const brands = [
  "/images/3m.png",
  "/images/Avery_Dennison.png",
  "/images/KPMF.png",
  "/images/HEXIS.png",
  "/images/INOZETEK.png",
  "/images/Tinybot.png",
  "/images/GSWF.png",
  "/images/NARDPPF.png",
  "/images/XPEL.png",

];

console.log("Original brands array:", brands); // Debugging

const BrandsCarousel = () => {
  return (
    <CarouselContainer>
      <Track>
        <motion.div
          className="logo-track"
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
          style={{ display: "flex", flexWrap: "nowrap" }} // Prevents wrapping
        >
          {/* Render original brands */}
          {brands.map((brand, index) => (
            <Logo key={`${brand}-${index}`} src={brand} alt={`Brand ${index + 1}`} />
          ))}
          
          {/* Duplicate brands in JSX (NOT in array logic) */}
          {brands.map((brand, index) => (
            <Logo key={`duplicate-${brand}-${index}`} src={brand} alt={`Duplicate Brand ${index + 1}`} />
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
  padding: 10px 0;
`;

const Track = styled.div`
  display: flex;
  align-items: center; /* Ensures everything is in a straight line */
  justify-content: center;
  width: 200%;
  gap: 20px; /* Keeps logos from overlapping */
`;


const Logo = styled.img`
  max-height: 100px; /* Set a max height instead of fixed height */
  width: auto; /* Maintain aspect ratio */
  margin: 0 40px;
  display: flex;
  align-self: center;
  object-fit: contain; /* Prevents stretching */

  /* If the logo is small, make it larger but keep alignment */
  ${({ src }) =>
    src.includes("Avery_Dennison") || src.includes("KPMF")
      ? "max-height: 100px;"
      : "max-height: 70px;"} /* Keeps other logos slightly smaller but still aligned */
`;


export default BrandsCarousel;

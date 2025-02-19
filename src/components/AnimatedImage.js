import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedImage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = process.env.PUBLIC_URL + "/images/car.jpg"; // Use local image
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded && (
        <motion.img 
          src={process.env.PUBLIC_URL + "/images/car.jpg"}
          alt="Luxury Car"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            width: "70%",
            maxWidth: "800px",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            position: "relative",
            zIndex: 0
          }}
        />
      )}
    </>
  );
};

export default AnimatedImage;

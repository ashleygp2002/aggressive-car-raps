import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedImage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "https://source.unsplash.com/1600x900/?luxury-car,black";
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded && (
        <motion.img 
          src="https://source.unsplash.com/1600x900/?luxury-car,black"
          alt="Luxury Car"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      )}
    </>
  );
};

export default AnimatedImage;

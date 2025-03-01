import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { motion } from "framer-motion";

const Car = ({ selectedMaterial }) => {
  const carRef = useRef();
  const { scene, materials } = useGLTF("/models/car.glb");

  // Load textures inside Canvas scope
  const [carbonTexture, normalMap, roughnessMap, metalnessMap] = useTexture([
    "/textures/carbon_fiber/Fabric004_2K-JPG_Color.jpg",
    "/textures/carbon_fiber/Fabric004_2K-JPG_NormalDX.jpg",
    "/textures/carbon_fiber/Fabric004_2K-JPG_Roughness.jpg",
    "/textures/carbon_fiber/Fabric004_2K-JPG_Metalness.jpg",
  ]);

  useEffect(() => {
    if (materials) {
      console.log("Available materials:", materials);

      // Identify correct car body material
      const carBodyMaterial = materials["mat_9920022.002"]; // Adjust material name if needed
      if (!carBodyMaterial) {
        console.warn("❌ Car body material not found.");
        return;
      }

      // Reset all maps to null before applying the new material
      carBodyMaterial.map = null;
      carBodyMaterial.normalMap = null;
      carBodyMaterial.roughnessMap = null;
      carBodyMaterial.metalnessMap = null;

      // Apply selected material
      if (selectedMaterial.type === "color") {
        carBodyMaterial.color.set(selectedMaterial.value);
        carBodyMaterial.roughness = 0.5;
        carBodyMaterial.metalness = 0.5;
      } else if (selectedMaterial.type === "texture") {
        carBodyMaterial.map = carbonTexture;
        carBodyMaterial.normalMap = normalMap;
        carBodyMaterial.roughnessMap = roughnessMap;
        carBodyMaterial.metalnessMap = metalnessMap;
        carBodyMaterial.color.set("#ffffff"); // Neutral base color
      }

      carBodyMaterial.needsUpdate = true;
    }
  }, [selectedMaterial, materials, carbonTexture, normalMap, roughnessMap, metalnessMap]);

  return <primitive ref={carRef} object={scene} />;
};

const CarModel = ({ selectedMaterial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        width: "80%",
        height: "500px",
        margin: "0 auto",
        border: "2px solid Black",
        backgroundColor: "#111",
      }}
    >
      <Canvas camera={{ position: [5, 1.5, 5], fov: 15 }} style={{ width: "80%", height: "500px", display:"block", margin: "0 auto"}}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Car selectedMaterial={selectedMaterial} />
        <OrbitControls />
      </Canvas>
    </motion.div>
  );
};

export default CarModel;

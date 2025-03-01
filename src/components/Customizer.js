// import React, { useState } from "react";
// import styled from "styled-components";
// import CarModel from "./CarModel";

// const options = [
//   { name: "Red", type: "color", value: "#FF0000" },
//   { name: "Blue", type: "color", value: "#0000FF" },
//   { name: "Black", type: "color", value: "#000000" },
//   { name: "White", type: "color", value: "#FFFFFF" },
//   { name: "Green", type: "color", value: "#00FF00" },
//   { name: "Carbon Fiber", type: "texture", value: "carbon-fiber" },
// ];

// const Customizer = () => {
//   const [selectedMaterial, setSelectedMaterial] = useState("#FF0000");

//   return (
//     <Container>
//       <h2>Select a Wrap Material</h2>
//       <Options>
//         {options.map((option) => (
//           <OptionButton
//             key={option.name}
//             style={{
//               backgroundColor: option.type === "color" ? option.value : "transparent",
//               backgroundImage: option.type === "texture" ? `url(/textures/carbon_fiber/Fabric004_2K-JPG_Color.jpg)` : "none",
//               backgroundSize: "cover",
//             }}
//             onClick={() => setSelectedMaterial(option.value)}
//           />
//         ))}
//       </Options>
//       <CarModel selectedMaterial={selectedMaterial} />
//     </Container>
//   );
// };

// export default Customizer;

// // Styled Components
// const Container = styled.div`
//   text-align: center;
//   padding: 40px;
//   background: #f5f5f5;
// `;

// const Options = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 10px;
//   margin-bottom: 20px;
// `;

// const OptionButton = styled.button`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   border: 2px solid white;
//   cursor: pointer;
//   transition: 0.3s;
//   &:hover {
//     transform: scale(1.1);
//   }
// `;

import React, { useState } from "react";
import styled from "styled-components";
import CarModel from "./CarModel";

const materials = [
  { name: "Red", type: "color", value: "#FF0000" },
  { name: "Blue", type: "color", value: "#0000FF" },
  { name: "Black", type: "color", value: "#000000" },
  { name: "White", type: "color", value: "#FFFFFF" },
  { name: "Green", type: "color", value: "#00FF00" },
  { name: "Gloss Fierce Fuchsia", type: "color", value: "#C42A56" },
  { name: "Gloss Bright Yellow", type: "color", value: "#FFD100" },
  { name: "Satin Perfect Blue", type: "color", value: "#005EB8" },
  { name: "Carbon Fiber", type: "texture", value: "carbon_fiber" }, // Texture selection
];

const Customizer = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);

  return (
    <Container>
      <h2>Select a Wrap Material</h2>
      <ColorOptions>
        {materials.map((material) => (
          <ColorButton
            key={material.name}
            style={{
              backgroundColor: material.type === "color" ? material.value : "gray",
              backgroundImage: material.type === "texture" ? "url(/textures/carbon_fiber/Fabric004_2K-JPG_Color.jpg)" : "none",
              backgroundSize: "cover",
            }}
            onClick={() => setSelectedMaterial(material)}
          />
        ))}
      </ColorOptions>
      <CarModel selectedMaterial={selectedMaterial} />
    </Container>
  );
};

export default Customizer;

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 40px;
  background: #f5f5f5;
`;

const ColorOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const ColorButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

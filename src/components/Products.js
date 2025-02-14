import React from "react";
import styled from "styled-components";

const products = [
  { id: 1, name: "Glossy Red Wrap", price: "$199", img: "https://source.unsplash.com/300x200/?red,car" },
  { id: 2, name: "Matte Black Wrap", price: "$249", img: "https://source.unsplash.com/300x200/?black,car" },
  { id: 3, name: "Carbon Fiber Wrap", price: "$299", img: "https://source.unsplash.com/300x200/?carbon,car" },
];

const Products = () => {
  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </ProductCard>
      ))}
    </ProductGrid>
  );
};

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 40px;
`;

const ProductCard = styled.div`
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    border-radius: 5px;
  }
  button {
    margin-top: 10px;
    background: red;
    color: white;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
  }
`;

export default Products;

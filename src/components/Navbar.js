import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure your logo is in src/assets/


const Navbar = () => {
    return (
      <NavContainer>
        <NavContent>
          <NavItem>
            <StyledLink to="/services">SERVICES</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/about">ABOUT</StyledLink>
          </NavItem>
          <LogoContainer>
            <Link to="/"> {/* Clicking this sends user to home page */}
            <img src={logo} alt="Aggressive Car Wraps" />
            </Link>
        </LogoContainer>
          <NavItem>
            <StyledLink to="/location">LOCATION</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/contact">CONTACT</StyledLink>
          </NavItem>
        </NavContent>
      </NavContainer>
    );
  };
  
  const NavContainer = styled.nav`
  width: 100%;
  height: 80px; /* Set a fixed height */
  background: #0a0a0a;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

  
  const NavContent = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
  
    @media (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
    }
  `;
  
  const NavItem = styled.div`
    text-align: center;
  
    @media (max-width: 768px) {
      font-size: 14px;
    }
  `;
  
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s;
  
    &:hover {
      color: #ffcc00;
    }
  `;
  

  
const LogoContainer = styled.div`
  flex: .5;
  text-align: center;

  img {
    height: 70px;
    cursor: pointer; /* Makes it clear it's clickable */
    transition: transform 0.2s;
  }

  img:hover {
    transform: scale(1.1); /* Slight zoom effect on hover */
  }
`;

export default Navbar;

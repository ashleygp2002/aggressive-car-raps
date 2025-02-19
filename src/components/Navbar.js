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
          <Link to="/">
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
  background: #0a0a0a;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0; /* Slightly less padding */
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
  padding: 0 15px;
  flex-wrap: nowrap; /* Prevents items from stacking */
  gap: 5px; /* Reduces space to fit everything */
  
  @media (max-width: 768px) {
    justify-content: space-between; /* Keeps it aligned */
    padding: 5px 8px; /* Less padding */
  }
`;

const NavItem = styled.div`
  text-align: center;
  white-space: nowrap; /* Prevents text wrapping */
  font-size: 15px; /* Default size */

  @media (max-width: 768px) {
    font-size: 10px; /* Smaller text for mobile */
    padding: 4px; /* Adjusts spacing */
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 15px; /* Default size */

  &:hover {
    color: #ffcc00;
  }

  @media (max-width: 768px) {
    font-size: 10px; /* Even smaller on mobile */
  }
`;

const LogoContainer = styled.div`
  flex: 0.5;
  text-align: center;

  img {
    height: 55px; /* Default desktop logo */
    width: auto;
    cursor: pointer;
    transition: transform 0.2s;
  }

  img:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    img {
      height: 35px; /* Makes logo smaller for mobile */
    }
  }
`;

export default Navbar;

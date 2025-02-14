import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure your logo is in src/assets/

const Navbar = () => {
  return (
    <Nav>
      <NavMenu>
        <NavItem><StyledLink to="/services">SERVICES</StyledLink></NavItem>
        <NavItem><StyledLink to="/about">ABOUT</StyledLink></NavItem>
      </NavMenu>

      <LogoContainer>
        <Link to="/"> {/* Clicking this sends user to home page */}
          <img src={logo} alt="Aggressive Car Wraps" />
        </Link>
      </LogoContainer>

      <NavMenu>
        <NavItem><StyledLink to="/location">LOCATION</StyledLink></NavItem>
        <NavItem><StyledLink to="/contact">CONTACT</StyledLink></NavItem>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background: #101218;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
`;

const NavItem = styled.li`
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    color: #4caf50; /* Green highlight effect on hover */
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

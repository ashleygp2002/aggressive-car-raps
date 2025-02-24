import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure your logo is in src/assets/
import { useTranslation } from "react-i18next"; // Import translation hook

const Navbar = () => {
  const { t, i18n } = useTranslation();

  // Function to switch languages
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <NavContainer>
      <NavContent>
        <NavItem>
          <StyledLink to="/services">{t("navbar.services")}</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/about">{t("navbar.about")}</StyledLink>
        </NavItem>
        <LogoContainer>
          <Link to="/">
            <img src={logo} alt="Aggressive Car Wraps" />
          </Link>
        </LogoContainer>
        <NavItem>
          <StyledLink to="/location">{t("navbar.location")}</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/contact">{t("navbar.contact")}</StyledLink>
        </NavItem>

        {/* 🔹 Language Switcher Dropdown */}
        <LanguageSwitcher>
          <select onChange={(e) => changeLanguage(e.target.value)}>
            <option value="en">🇺🇸 EN</option>
            <option value="es">🇪🇸 ES</option>
          </select>
        </LanguageSwitcher>
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
  padding: 12px 0;
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
  flex-wrap: nowrap;
  gap: 5px;
  
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 5px 8px;
  }
`;

const NavItem = styled.div`
  text-align: center;
  white-space: nowrap;

  @media (min-width: 769px) {
    font-size: 18px; /* 🔹 Larger font for desktop */
  }

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 4px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;

  @media (min-width: 769px) {
    font-size: 18px; /* 🔹 Larger font for desktop */
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }

  &:hover {
    color: #ffcc00;
  }
`;

const LogoContainer = styled.div`
  flex: 0.5;
  text-align: center;

  img {
    height: 55px;
    width: auto;
    cursor: pointer;
    transition: transform 0.2s;
  }

  img:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    img {
      height: 35px;
    }
  }
`;

const LanguageSwitcher = styled.div`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  
  select {
    background: none;
    border: none;
    color: white;
    font-size: 14px;
    cursor: pointer;
    outline: none;
    padding: 5px;
    letter-spacing: 1px;
    font-weight: bold;

    &:hover {
      color: #ffcc00;
    }
  }

  @media (max-width: 768px) {
    select {
      font-size: 10px;
  }
`;

export default Navbar;

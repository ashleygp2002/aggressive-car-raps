import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2025 Car Wraps | All Rights Reserved</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: black;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 20px;
`;

export default Footer;

import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <ContactContainer>
      <ImageContainer>
        <StyledImage src="/images/final_car.png" alt="Shop Location" />
      </ImageContainer>
      <InfoContainer>
        <h2>{t("contact.title")}</h2>
        <p>{t("contact.subtitle")}</p>
        <ContactInfo>
          <p><strong>{t("contact.email")}:</strong> aggressivecarwraps@gmail.com</p>
          <p><strong>{t("contact.phone")}:</strong> 1 (213) 646 - 5016</p>
          <p><strong>{t("contact.address")}:</strong> 1505 S Santa Fe Ave, Los Angeles, CA 90021</p>
          <p><strong>{t("contact.instagram")}:</strong> @aggressivecarwraps</p>
        </ContactInfo>
      </InfoContainer>
    </ContactContainer>
  );
};

// **Styled Components**
const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  justify-content: center;
  background: white;
  padding: 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  max-width: 50%;
  background: black;
  color: white;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 30px;
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;

  p {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

export default ContactSection;

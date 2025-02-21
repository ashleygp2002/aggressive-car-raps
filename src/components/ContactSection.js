import React from "react";
import styled from "styled-components";

const ContactSection = () => {
  return (
    <ContactContainer>
      <ImageContainer>
        <img src="/images/car.png" alt="Shop Location" />
      </ImageContainer>
      <InfoContainer>
        <h2>CONTACT US</h2>
        <p>Call or write us today.</p>
        <ContactInfo>
          <p><strong>Email:</strong> aggressivecarwraps@gmail.com</p>
          <p><strong>Phone:</strong> 1 (213) 646 - 5016</p>
          <p><strong>Address:</strong> 1505 S Santa Fe Ave, Los Angeles, CA 90021</p>
          <p><strong>Instagram:</strong> @aggressivecarwraps</p>
        </ContactInfo>
      </InfoContainer>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 50px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
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

import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <ContactSection>
      <h2>Contact Aggressive Car Wraps</h2>
      <Form>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="tel" placeholder="Phone" />
        <Input type="text" placeholder="What are you interested in?" />
        <Textarea placeholder="How can we help you?" />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </ContactSection>
  );
};

export default ContactForm;

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url("/images/car.png") no-repeat center center/cover; /* Background Image */
  padding: 50px 20px;
`;

const Form = styled.form`
  background: rgba(255, 255, 255, 0.1); /* Transparent White */
  padding: 30px;
  border-radius: 15px; /* Rounded Corners */
  backdrop-filter: blur(10px); /* Blur Effect */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Textarea = styled.textarea`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  padding: 12px;
  height: 100px;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  outline: none;
  resize: none;
  margin-bottom: 15px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const SubmitButton = styled.button`
  background: #4caf50;
  color: white;
  font-size: 18px;
  padding: 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #45a049;
    transform: scale(1.05);
  }
`;

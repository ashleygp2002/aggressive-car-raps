import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <FormContainer>
      <FormWrapper>
        <h1>Contact Aggressive Car Wraps</h1>
        <form action="https://formsubmit.co/aggressivecarwraps@gmail.com" method="POST">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Phone" required />
          <input type="text" name="subject" placeholder="What are you interested in?" required />
          <textarea name="message" placeholder="How can we help you?" required></textarea>

          
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          <button type="submit">Submit</button>
        </form>
      </FormWrapper>
    </FormContainer>
  );
};

// Styled Components
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('/images/car1.png') no-repeat center center;
  background-size: cover;
  padding: 20px;
`;

const FormWrapper = styled.div`
  background: rgba(0, 0, 0, 0.6); /* Transparent glass effect */
  backdrop-filter: blur(10px); /* Frosted glass effect */
  padding: 40px;
  border-radius: 15px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.5);
  
  h1 {
    color: lightgray;
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }

  input, textarea {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    outline: none;
    transition: all 0.3s ease-in-out;
  }

  input::placeholder, textarea::placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-family: "Courier New", monospace;
  }

  textarea {
    height: 120px;
  }

  input:focus, textarea:focus {
    background: rgba(255, 255, 255, 0.3);
  }

  button {
    width: 100%;
    padding: 14px;
    background: #4caf50;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    background: #3e8e41;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    padding: 30px;
    max-width: 90%;
  }
`;

export default ContactForm;

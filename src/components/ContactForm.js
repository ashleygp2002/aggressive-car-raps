import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next"; // Import translation hook

const ContactForm = () => {
  const { t } = useTranslation(); // Initialize translation
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    const formData = new FormData(e.target);

    await fetch("https://formsubmit.co/ajax/aggressivecarwraps@gmail.com", {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setIsSubmitted(true); // Show success message
        } else {
          alert(t("contactForm.error")); // Use translated error message
        }
      })
      .catch((error) => console.error("Form Submission Error:", error));
  };

  return (
    <FormContainer>
      <FormWrapper>
        {isSubmitted ? (
          <SuccessMessage>{t("contactForm.success")}</SuccessMessage>
        ) : (
          <>
            <h1>{t("contactForm.title")}</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder={t("contactForm.name")} required />
              <input type="email" name="email" placeholder={t("contactForm.email")} required />
              <input type="tel" name="phone" placeholder={t("contactForm.phone")} required />
              
              {/* Replace text input with a dropdown */}
              <Select name="subject" required>
                <option value="">{t("contactForm.selectService")}</option>
                <option value="PPF">{t("contactForm.services.ppf")}</option>
                <option value="Calipers Color Change">{t("contactForm.services.calipers")}</option>
                <option value="Powder Coating & Rim Repair">{t("contactForm.services.powderCoating")}</option>
                <option value="Window Tint">{t("contactForm.services.windowTint")}</option>
                <option value="Ceramic Coating">{t("contactForm.services.ceramicCoating")}</option>
                <option value="Paint Correction & Detailing">{t("contactForm.services.paintCorrection")}</option>
                <option value="Commercial Wraps">{t("contactForm.services.commercialWraps")}</option>
              </Select>

              <textarea name="message" placeholder={t("contactForm.message")} required></textarea>

              {/* Hidden fields to prevent captcha and format submission */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />

              <button type="submit">{t("contactForm.submit")}</button>
            </form>
          </>
        )}
      </FormWrapper>
    </FormContainer>
  );
};

// **Styled Components**
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
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
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

  input, textarea, select {
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

  select {
    cursor: pointer;
  }

  input::placeholder, textarea::placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-family: "Courier New", monospace;
  }

  textarea {
    height: 120px;
  }

  input:focus, textarea:focus, select:focus {
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
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in-out;
`;

const SuccessMessage = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: lightgrey;
  text-align: center;
  padding: 20px;
`;

export default ContactForm;

// import React, { useState } from "react";
// import styled from "styled-components";
// import { useTranslation } from "react-i18next"; // Import translation hook

// const ContactForm = () => {
//   const { t } = useTranslation(); // Initialize translation
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent page reload

//     const formData = new FormData(e.target);

//     await fetch("https://formsubmit.co/ajax/aggressivecarwraps@gmail.com", {
//       method: "POST",
//       body: formData,
//       headers: {
//         "Accept": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           setIsSubmitted(true); // Show success message
//         } else {
//           alert(t("contactForm.error")); // Use translated error message
//         }
//       })
//       .catch((error) => console.error("Form Submission Error:", error));
//   };

//   return (
//     <FormContainer>
//       <FormWrapper>
//         {isSubmitted ? (
//           <SuccessMessage>{t("contactForm.success")}</SuccessMessage>
//         ) : (
//           <>
//             <h1>{t("contactForm.title")}</h1>
//             <form onSubmit={handleSubmit}>
//               <input type="text" name="name" placeholder={t("contactForm.name")} required />
//               <input type="email" name="email" placeholder={t("contactForm.email")} required />
//               <input type="tel" name="phone" placeholder={t("contactForm.phone")} required />
//               <input type="text" name="subject" placeholder={t("contactForm.subject")} required />
//               <textarea name="message" placeholder={t("contactForm.message")} required></textarea>

//               {/* Hidden fields to prevent captcha and format submission */}
//               <input type="hidden" name="_captcha" value="false" />
//               <input type="hidden" name="_template" value="box" />

//               <button type="submit">{t("contactForm.submit")}</button>
//             </form>
//           </>
//         )}
//       </FormWrapper>
//     </FormContainer>
//   );
// };

// // **Styled Components**
// const FormContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: url('/images/car1.png') no-repeat center center;
//   background-size: cover;
//   padding: 20px;
// `;

// const FormWrapper = styled.div`
//   background: rgba(0, 0, 0, 0.6);
//   backdrop-filter: blur(10px);
//   padding: 40px;
//   border-radius: 15px;
//   max-width: 500px;
//   width: 100%;
//   text-align: center;
//   box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.5);

//   h1 {
//     color: lightgray;
//     font-size: 2.5rem;
//     margin-bottom: 20px;
//   }

//   form {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }

//   input, textarea {
//     width: 100%;
//     padding: 12px;
//     margin: 10px 0;
//     border: none;
//     border-radius: 10px;
//     font-size: 1rem;
//     background: rgba(255, 255, 255, 0.2);
//     color: white;
//     outline: none;
//     transition: all 0.3s ease-in-out;
//   }

//   input::placeholder, textarea::placeholder {
//     color: rgba(255, 255, 255, 0.7);
//     font-family: "Courier New", monospace;
//   }

//   textarea {
//     height: 120px;
//   }

//   input:focus, textarea:focus {
//     background: rgba(255, 255, 255, 0.3);
//   }

//   button {
//     width: 100%;
//     padding: 14px;
//     background: #4caf50;
//     color: white;
//     font-size: 1.2rem;
//     font-weight: bold;
//     border: none;
//     border-radius: 10px;
//     cursor: pointer;
//     transition: all 0.3s ease-in-out;
//   }

//   button:hover {
//     background: #3e8e41;
//   }
// `;

// const SuccessMessage = styled.div`
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: lightgrey;
//   text-align: center;
//   padding: 20px;
// `;

// export default ContactForm;


// // import React, { useState } from "react";
// // import styled from "styled-components";

// // const ContactForm = () => {
// //   const [isSubmitted, setIsSubmitted] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault(); // Prevent page reload

// //     const formData = new FormData(e.target);

// //     await fetch("https://formsubmit.co/ajax/aggressivecarwraps@gmail.com", {
// //       method: "POST",
// //       body: formData,
// //       headers: {
// //         "Accept": "application/json",
// //       },
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         if (data.success) {
// //           setIsSubmitted(true); // Show success message
// //         } else {
// //           alert("Error: Could not submit form.");
// //         }
// //       })
// //       .catch((error) => console.error("Form Submission Error:", error));
// //   };

// //   return (
// //     <FormContainer>
// //       <FormWrapper>
// //         {isSubmitted ? (
// //           <SuccessMessage>Thank you! Your message has been submitted.</SuccessMessage>
// //         ) : (
// //           <>
// //             <h1>Contact Aggressive Car Wraps</h1>
// //             <form onSubmit={handleSubmit}>
// //               <input type="text" name="name" placeholder="Name" required />
// //               <input type="email" name="email" placeholder="Email" required />
// //               <input type="tel" name="phone" placeholder="Phone" required />
// //               <input type="text" name="subject" placeholder="What are you interested in?" required />
// //               <textarea name="message" placeholder="How can we help you?" required></textarea>

// //               {/* Hidden fields to prevent captcha and format submission */}
// //               <input type="hidden" name="_captcha" value="false" />
// //               <input type="hidden" name="_template" value="box" />

// //               <button type="submit">Submit</button>
// //             </form>
// //           </>
// //         )}
// //       </FormWrapper>
// //     </FormContainer>
// //   );
// // };

// // // Styled Components
// // const FormContainer = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   height: 100vh;
// //   background: url('/images/car1.png') no-repeat center center;
// //   background-size: cover;
// //   padding: 20px;
// // `;

// // const FormWrapper = styled.div`
// //   background: rgba(0, 0, 0, 0.6);
// //   backdrop-filter: blur(10px);
// //   padding: 40px;
// //   border-radius: 15px;
// //   max-width: 500px;
// //   width: 100%;
// //   text-align: center;
// //   box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.5);

// //   h1 {
// //     color: lightgray;
// //     font-size: 2.5rem;
// //     margin-bottom: 20px;
// //   }

// //   form {
// //     display: flex;
// //     flex-direction: column;
// //     align-items: center;
// //   }

// //   input, textarea {
// //     width: 100%;
// //     padding: 12px;
// //     margin: 10px 0;
// //     border: none;
// //     border-radius: 10px;
// //     font-size: 1rem;
// //     background: rgba(255, 255, 255, 0.2);
// //     color: white;
// //     outline: none;
// //     transition: all 0.3s ease-in-out;
// //   }

// //   input::placeholder, textarea::placeholder {
// //     color: rgba(255, 255, 255, 0.7);
// //     font-family: "Courier New", monospace;
// //   }

// //   textarea {
// //     height: 120px;
// //   }

// //   input:focus, textarea:focus {
// //     background: rgba(255, 255, 255, 0.3);
// //   }

// //   button {
// //     width: 100%;
// //     padding: 14px;
// //     background: #4caf50;
// //     color: white;
// //     font-size: 1.2rem;
// //     font-weight: bold;
// //     border: none;
// //     border-radius: 10px;
// //     cursor: pointer;
// //     transition: all 0.3s ease-in-out;
// //   }

// //   button:hover {
// //     background: #3e8e41;
// //   }
// // `;

// // const SuccessMessage = styled.div`
// //   font-size: 1.5rem;
// //   font-weight: bold;
// //   color: lightgrey;
// //   text-align: center;
// //   padding: 20px;
// // `;

// // export default ContactForm;

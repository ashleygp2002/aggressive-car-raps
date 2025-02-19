import React from "react";
import styled from "styled-components";

const LocationMap = () => {
  return (
    <MapContainer>
      <h2>📍 We're Here for You!</h2>
      <p>Visit us at <strong>1505 S Santa Fe Ave, Los Angeles, CA 90021</strong></p>
      <iframe
        title="Google Map"
        width="100%"
        height="500"
        frameBorder="0"
        style={{ border: "0", borderRadius: "10px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.6781754955337!2d-118.2329440245989!3d34.02647087316669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c89f42644f19%3A0x63ca3bc7e23af7ee!2s1505%20S%20Santa%20Fe%20Ave%2C%20Los%20Angeles%2C%20CA%2090021!5e0!3m2!1sen!2sus!4v1739563125366!5m2!1sen!2sus"
      ></iframe>
    </MapContainer>
  );
};

const MapContainer = styled.section`
  text-align: center;
  background: #0a0a0a;
  color: white;
  padding: 50px 20px;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #99ff00;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  iframe {
    width: 100%;
    max-width: 1100px;
    height: 500px;
    border-radius: 10px;
  }
`;

export default LocationMap;

import React, { useEffect } from "react";
import styled from "styled-components";

const InstagramEmbed = () => {
  const instagramPosts = [
    "https://www.instagram.com/reel/DFJQtCsSGgb/?utm_source=ig_embed&amp;utm_campaign=loading",
    "https://www.instagram.com/reel/DAEx4r1ybLV/?utm_source=ig_embed&amp;utm_campaign=loading",
    
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);
  }, []);

  return (
    <EmbedContainer>
      <h2>Our Latest Work</h2>
      <PostGrid>
        {instagramPosts.map((post, index) => (
          <PostWrapper key={index}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={post}
              data-instgrm-version="14"
            >
              <a href={post} target="_blank" rel="noopener noreferrer">
                View this post on Instagram
              </a>
            </blockquote>
          </PostWrapper>
        ))}
      </PostGrid>
    </EmbedContainer>
  );
};

// Styled Components
const EmbedContainer = styled.div`
  text-align: center;
  padding: 50px 0;
  background: #f8f8f8;

  h2 {
    font-size: 2rem;
    color: #101218;
    margin-bottom: 30px;
  }
`;

const PostGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PostWrapper = styled.div`
  width: 350px;
  height: 440px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
  }

  blockquote {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  iframe {
    width: 100%;
    height: 100%;
  }
`;

export default InstagramEmbed;

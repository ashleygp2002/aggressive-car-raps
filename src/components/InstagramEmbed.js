import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";

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

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <EmbedContainer ref={ref}>
      <h2>Our Latest Work</h2>
      <PostGrid>
        {instagramPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <PostWrapper>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={post}
                data-instgrm-version="14"
                data-instgrm-captioned="true" // ✅ Enables comments & likes UI
              >
                <a href={post} target="_blank" rel="noopener noreferrer">
                  View this post on Instagram
                </a>
              </blockquote>
            </PostWrapper>
          </motion.div>
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
  width: 400px; /* ✅ Adjust width for better fit */
  min-height: 550px; /* ✅ Increased height to show full post */
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px; /* ✅ Adds space inside the box */

  blockquote {
    width: 100%;
    height: 100%;
    min-height: 550px; /* ✅ Ensures full post is visible */
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default InstagramEmbed;

import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import translation hook

const reviews = [
  {
    name: "Sophia T.",
    location: "Los Angeles, CA",
    rating: 5,
    date: "2 years ago",
    review_en: `Excellent, friendly, and detailed service! I came to Aggressive Car Wraps for a wrap on my Mustang Mach-E. 
      It was a black car that needed a kick! The car took three days in the shop for the wrap and ceramic coating. 
      When I came to pick it up, I was in awe of how beautiful it looked! 
      Everyone at Aggressive was super friendly and listened to everything I wanted. I recommend this place for so many reasons.`,
    review_es: `¡Servicio excelente, amigable y detallado! Fui a Aggressive Car Wraps para envolver mi Mustang Mach-E. 
      Era un coche negro que necesitaba un cambio. El auto estuvo tres días en el taller para el wrap y el recubrimiento cerámico. 
      ¡Cuando lo recogí, quedé impresionada con lo hermoso que se veía! 
      Todos en Aggressive fueron súper amables y escucharon todo lo que quería. ¡Recomiendo este lugar por muchas razones!`,
    image: "/images/Sophia.jpg",
  },
  {
    name: "Joy N.",
    location: "Los Angeles, CA",
    rating: 5,
    date: "1 year ago",
    review_en: "1000000000% recommend. I will forever be bringing all my cars here simply because the owners are amazing people. They do amazing work, are super responsive, and take care of their clients.",
    review_es: "1000000000% recomendado. Siempre traeré todos mis autos aquí simplemente porque los dueños son personas increíbles. Hacen un trabajo increíble, son muy atentos y realmente cuidan a sus clientes.",
    image: "/images/Joy.jpg",
  },
  {
    name: "Ernest P.",
    location: "Los Angeles, CA",
    rating: 5,
    date: "1 year ago",
    review_en: "I stopped by for a quote to remove a 4-year-old wrap from my VW Golf. To my surprise, they were able to take me that very day. Four hours later, the car was finished and looked better than showroom new!",
    review_es: "Pasé por un presupuesto para quitar un wrap de 4 años de mi VW Golf. Para mi sorpresa, ¡me atendieron ese mismo día! Cuatro horas después, el coche estaba terminado y se veía mejor que nuevo.",
    image: "/images/Ernest.jpg",
  },
  {
    name: "Manuel V.",
    location: "Los Angeles, CA",
    rating: 5,
    date: "1 year ago",
    review_en: "I booked my appointment a few days in advance through Yelp and arrived 10 minutes early. I went in for chrome delete and ended up getting my windows tinted as well. They gave me an excellent price and got it done within a few hours.",
    review_es: "Reservé mi cita con unos días de anticipación a través de Yelp y llegué 10 minutos antes. Fui por un Chrome Delete y terminé tintando mis ventanas también. Me dieron un precio excelente y lo hicieron en unas pocas horas.",
    image: "/images/Manuel.jpg",
  }
];

const YelpReviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleReadMore = (index) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <ReviewsSection ref={ref}>
      <Title>{t("reviews.title")}</Title>
      <Subtitle>{t("reviews.subtitle")}</Subtitle>
      <ReviewsContainer>
        {reviews.map((review, index) => {
          const isExpanded = expandedReviews[index];
          const fullReview = language === "es" ? review.review_es : review.review_en;
          const shortReview = fullReview.slice(0, 150) + "...";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <ReviewCard>
                <Profile>
                  <ProfileImage src={review.image} alt={review.name} />
                  <div>
                    <h3>{review.name}</h3>
                    <p>{review.location} - {review.date}</p>
                    <Rating>{'★'.repeat(review.rating)}</Rating>
                  </div>
                </Profile>
                <ReviewText>
                  {isExpanded ? fullReview : shortReview}
                  <ReadMoreButton onClick={() => toggleReadMore(index)}>
                    {isExpanded ? t("reviews.showLess") : t("reviews.readMore")}
                  </ReadMoreButton>
                </ReviewText>
              </ReviewCard>
            </motion.div>
          );
        })}
      </ReviewsContainer>
    </ReviewsSection>
  );
};

export default YelpReviews;

// Styled Components
const ReviewsSection = styled.section`
  text-align: center;
  padding: 50px 20px;
  background: #f8f9fa;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 30px;
`;

const ReviewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ReviewCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  width: 320px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
`;

const Rating = styled.div`
  font-size: 1.2rem;
  color: #ffba00;
`;

const ReviewText = styled.p`
  font-size: 1rem;
  color: #333;
  font-style: italic;
  line-height: 1.4;
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 5px;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;

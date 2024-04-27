import React from "react";
import {
  Basket3, // Shop
  Trophy, // Leagues
  ChatSquareText, // Lectures
  QuestionCircle, // Seminars
  People, // Community
} from "react-bootstrap-icons";

const ServiceCard = ({ icon, title, description, backgroundImage }) => (
  <div
    className="service-card"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="service-content">
      <div className="service-text">
        <div className="service-icon">{icon}</div>
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  return (
    <div className="services-container">
      <ServiceCard
        icon={<Basket3 size={30} />}
        title="Семинары"
        description="Тестируй свои знания, проходя интерактивные квизы"
        backgroundImage="/test3.png"
      />
      <ServiceCard
        icon={<QuestionCircle size={30} />}
        title="Лекции"
        description="Просматривай контент и делись своим мнением c другими"
        backgroundImage="/test4.png"
      />
      <ServiceCard
        icon={<ChatSquareText size={30} />}
        title="Магазин"
        description="Покупай за кристаллы жизни и заморзки"
        backgroundImage="/test5.png"
      />
      <ServiceCard
        icon={<Trophy size={30} />}
        title="Лиги"
        description="Соревнуйся и получай признание от других пользователей"
        backgroundImage="/test1.png"
      />
      <ServiceCard
        icon={<People size={30} />}
        title="Сообщество"
        description="Помогай другим и получай поддержку"
        backgroundImage="/test2.png"
      />

      {/* ... other service cards ... */}
    </div>
  );
};

export default ServicesSection;

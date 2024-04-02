import React from "react";
import { Card, Carousel } from "react-bootstrap";

const Certificates = () => {
  const certificates = [
    { id: 1, title: "C# Beginner", logo: "C#" },
    { id: 1, title: "C# Beginner", logo: "C#" },
    { id: 1, title: "C# Beginner", logo: "C#" },
    { id: 1, title: "C# Beginner", logo: "C#" },
  ];

  return (
    <Card className="certificates-card">
      <Card.Body>
        <Card.Title>Certificates</Card.Title>
        <Carousel indicators={false} className="certificates-carousel">
          {certificates.map((cert) => (
            <Carousel.Item key={cert.id}>
              <div className="certificate-item">
                <span className="certificate-logo">{cert.logo}</span>
                <span className="certificate-title">{cert.title}</span>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Card.Body>
    </Card>
  );
};

export default Certificates;

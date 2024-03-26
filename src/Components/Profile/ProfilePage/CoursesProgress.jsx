import React from "react";
import { Button, Card } from "react-bootstrap";

const CoursesProgress = () => {
  const courses = [
    { id: 1, title: "C# Intermediate", status: "In Progress" },
    { id: 2, title: "C# Advanced", status: "In Progress" },
  ];

  return (
    <Card className="courses-progress-card">
      <Card.Body>
        <Card.Title>Courses Progress</Card.Title>
        {courses.map((course) => (
          <div key={course.id} className="course-item">
            <span className="course-logo">C#</span>
            <span className="course-title">{course.title}</span>
            <span className="course-status">{course.status}</span>
            <Button variant="link" className="course-action">
              ▶
            </Button>
          </div>
        ))}
        <Button variant="outline-primary" className="w-100 btn-cp">
          Browse Courses
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CoursesProgress;
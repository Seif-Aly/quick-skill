import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { fetchMyCourses } from "../../../Store/actions";
import { Link } from "react-router-dom";

const CoursesProgress = () => {
  const dispatch = useDispatch();
  const { userCourses, loading, error } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(fetchMyCourses());
  }, [dispatch]);

  if (loading) {
    return <div>Loading your courses...</div>;
  }

  if (error) {
    return <div>Error fetching courses: {error}</div>;
  }
  return (
    <Card className="coursess-progress-card">
      <Card.Body>
        <Card.Title className="crs-title">Courses Progress</Card.Title>
        {userCourses &&
          userCourses.map((course) => (
            <div key={course.course_id} className="course-item">
              <span className="course-title">{course.course_name}</span>
              <span className="course-status mr-3">
                {course.completed_percent + "%"}
              </span>
              <Link
                className="course-action"
                to={`/course/${course.course_id}`}
              >
                ▶
              </Link>
            </div>
          ))}
        <Button variant="outline-primary" className="w-100 btn-cp" href="/">
          Browse Courses
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CoursesProgress;

import React from 'react';
import './Courses.css';

import course1Img from '../assets/courses_photo/ac.jpg'; // Replace with actual image paths
import course2Img from '../assets/courses_photo/ac.jpg';
import course3Img from '../assets/courses_photo/ac.jpg';
import course4Img from '../assets/courses_photo/ac.jpg';
import course5Img from '../assets/courses_photo/ac.jpg';
import course6Img from '../assets/courses_photo/ac.jpg';

const courses = [
  {
    name: 'Course 1',
    img: course1Img,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Course 2',
    img: course2Img,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Course 3',
    img: course3Img,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Course 4',
    img: course4Img,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Course 5',
    img: course5Img,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Course 6',
    img: course6Img,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }
];

const Courses = () => {
  const handleEnrollClick = (courseName) => {
    alert(`${courseName} has been enrolled`);
  };

  return (
    <div className="courses-page">
      <h1>Available Courses</h1>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div className="course-card1" key={index}>
            <img src={course.img} alt={course.name} className="course-image1" />
            <h2 className="course-name1">{course.name}</h2>
            <p className="course-info">{course.description}</p>
            <button 
              className="enroll-button"
              onClick={() => handleEnrollClick(course.name)} // Add onClick handler
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './Cart.css'; // Import the CSS file for styling
import course1Img from '../assets/courses_photo/ac.jpg'; // Replace with actual image paths
import course2Img from '../assets/courses_photo/ac.jpg';

// Register chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

// Sample data for pie chart
const data = {
  labels: ['Completed', 'In Progress', 'Not Started'],
  datasets: [
    {
      data: [50, 30, 20], // Example data
      backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'], // Colors for each section
      borderColor: '#fff',
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.label}: ${tooltipItem.raw}%`;
        },
      },
    },
  },
};

// Sample courses data
const courses = [
  {
    name: 'Course 1',
    img: course1Img, // Replace with actual path
  },
  {
    name: 'Course 2',
    img: course2Img, // Replace with actual path
  }
];

const Cart = () => {
  return (
    <div className="cart-page">
      <div className="header">
        <h1>John Doe</h1>
        <h2>Institute Name</h2>
        <p>Number of Courses Enrolled: 5</p>
      </div>
      <div className="content">
        <div className="saved-courses">
          <h3>Saved Courses</h3>
          <div className="course-cards">
            {courses.map((course, index) => (
              <div className="course-card" key={index}>
                <img src={course.img} alt={course.name} className="course-image" />
                <h4 className="course-name">{course.name}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="chart-container">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Cart;

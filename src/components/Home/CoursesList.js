import React from 'react';
import './CoursesList.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
// Import images
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';

const CoursesList = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // Sample course data
  const courses = [
    {
      id: 1,
      name: 'Course 1',
      price: '$19.99',
      rating: 4.5,
      image: image1,
    },
    {
      id: 2,
      name: 'Course 2',
      price: '$29.99',
      rating: 3.8,
      image: image2,
    }
  ];

  const handlePurchaseCourse = (course) => {
    if (currentUser) {
      // User is logged in, navigate to purchase course with course data
      navigate('/purchase-course', { state: { course } });
    } else {
      // User is not logged in, navigate to login
      navigate('/login');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Courses</h2>
      <div className="d-flex">
        {courses.map((course) => (
          <div key={course.id} className="card course-card flex-grow-0 mx-2">
            <img src={course.image} className="card-img-top" alt={`Course ${course.id}`} />
            <div className="card-body">
              <h5 className="card-title">{course.name}</h5>
              <p className="card-text">Price: {course.price}</p>
              <div className="rating">
                <p className="card-text">Rating:</p>
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={index < Math.floor(course.rating) ? 'star-filled' : 'star-outline'}
                  ></span>
                ))}
                {course.rating % 1 !== 0 && <span className="star-half-filled"></span>}
              </div>
              <button className="btn btn-success btn-buy" onClick={() => handlePurchaseCourse(course)}>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;

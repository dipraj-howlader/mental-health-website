import React from 'react';
import './Courses.css';

const Courses = () => {
  // Sample course data
  const courses = [
    {
      id: 1,
      name: 'Course 1',
      price: '$19.99',
      rating: 4.5,
      image: '../../images/Relationship-_-Intimacy-Training-700x430_20OFF-2-480x304.jpg',
    },
    {
      id: 2,
      name: 'Course 2',
      price: '$29.99',
      rating: 3.8,
      image: '../../images/Phycological-Well-Being-700-x-430-480x304.jpg',
    }
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Courses</h2>
      <div className="course-scroll-container">
        <div className="course-scroll d-flex flex-nowrap overflow-auto">
          {courses.map((course) => (
            <div key={course.id} className="card course-card flex-grow-0">
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
                <button className="btn btn-success btn-buy">Buy</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

import React from 'react';
import { useSelector } from 'react-redux';
import Course from './Course/Course';


const Courses = () => {
  const { courses } = useSelector((state) => state.courses);
  return (
    <div>
      {courses.map((course) => (
        <Course section={course} />
      ))}
    </div>
  );
}

export default Courses;
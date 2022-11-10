import React from 'react';
import { useSelector } from 'react-redux';
import Sections from './Sections/Sections';


const Course = () => {
  const { courses } = useSelector((state) => state.courses);
  return (
    <div>
      {courses.map((section) => (
        <Sections section={section} />
      ))}
    </div>
  );
}

export default Course;
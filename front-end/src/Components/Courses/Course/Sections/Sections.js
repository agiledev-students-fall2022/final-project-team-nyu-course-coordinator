import React from 'react';
import { useSelector } from 'react-redux';
import Section from './Section/Section';


const Sections = () => {
  const { sections } = useSelector((state) => state.sections);
  return (
    <div>
      {sections.map((section) => (
        <Section section={section} />
      ))}
    </div>
  );
}

export default Sections;
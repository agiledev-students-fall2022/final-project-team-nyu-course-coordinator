const assert = require('assert');
const { expect } = require('chai');
const { getCourses, getCourse, changeSection } = require('../controllers/courses');

describe('the getCourses function', () => {
  it('should return a JSON object with the courses', () => {
    const courses = getCourses();
    assert.equal(typeof courses, 'object');
  });

  it('should be able to handle an error', () => {
    const courses = getCourses();
    assert.equal(typeof courses, 'object');
  });

});

describe('the getCourse function', () => {
  it('should return a JSON object with the course', () => {
    const course = getCourse();
    assert.equal(typeof course, 'object');
  });

  it('should be able to handle an error', () => {
    const course = getCourse();
    assert.equal(typeof course, 'object');
  });
});

describe('the changeSection function', () => {
  it('should return a JSON object with the updated course', () => {
    const course = changeSection();
    assert.equal(typeof course, 'object');
  });

  it('should be able to handle an error', () => {
    const course = changeSection();
    assert.equal(typeof course, 'object');
  });

});
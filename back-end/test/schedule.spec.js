const assert = require('assert');
const { addToSchedule, removeFromSchedule } = require('../controllers/schedule');

describe('the addToSchedule function', () => {
  it('should return a JSON object with the updated course', () => {
    const course = addToSchedule();
    assert.equal(typeof course, 'object');
  });
  it('should be able to handle an error', () => {
    const course = addToSchedule();
    assert.equal(typeof course, 'object');
  });
});

describe('the removeFromSchedule function', () => {
  it('should return a JSON object with the updated course', () => {
    const course = removeFromSchedule();
    assert.equal(typeof course, 'object');
  });
  it('should be able to handle an error', () => {
    const course = removeFromSchedule();
    assert.equal(typeof course, 'object');
  });
});
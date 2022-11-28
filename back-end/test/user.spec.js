const assert = require('assert');
const { signin, signup } = require('../controllers/user');

describe('the signin function', () => {
  it('should return a JSON object with the user', () => {
    const user = signin();
    assert.equal(typeof user, 'object');
  });

  it('should be able to handle an error', () => {
    const user = signin();
    assert.equal(typeof user, 'object');
  });
});

describe('the signup function', () => {
  it('should return a JSON object with the user', () => {
    const user = signup();
    assert.equal(typeof user, 'object');
  });
  it('should be able to handle an error', () => {
    const user = signup();
    assert.equal(typeof user, 'object');
  });
});


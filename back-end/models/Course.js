const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

// Course schema
const Course = new mongoose.Schema({
  name: {type: String, required: true},
  isRequired: {type: Boolean, required: true},
  prereqs: {type: String, required: true},
  sessions: [{
      section: {type: Number, required: true},
      prof: {type: String, required: true},
      day: [{ 
        type: String, 
        required: true 
      }],
      time: {type: String, required: true},
      time2: {type: Number, required: true},  
      loc: {type: String, required :true},
      }, {_id: true}]
}, {
  _id: true
});

module.exports = mongoose.model('Course', Course);
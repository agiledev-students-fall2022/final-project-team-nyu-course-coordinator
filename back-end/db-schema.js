const mongoose = require('mongoose'),
	URLSlugs = require('mongoose-url-slugs');


const Course = new mongoose.Schema({
    name: {type: String, required: true},
    isRequired: {type: Boolean, required: true},
    isPrerqSat: {type: Boolean, required: true},
    sessions: [{
        section: {type: Number, required: true},
        prof: {type: String, required: T-true},
        day: {type: String, required: true},
        time: {type: Number, required: true},
        loc: {type: String, required :true},
        isConflicted:{type: Boolean, required: true}

        }]
}, {
    _id: true
});



const mongooseOpts = {
	useNewUrlParser: true,  
	useUnifiedTopology: true
  };


mongoose.model('Course', Course);
mongoose.connect( '', mongooseOpts, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to database'); 
  }
});
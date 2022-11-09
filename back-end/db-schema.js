const mongoose = require('mongoose')


const Course = new mongoose.Schema({
    name: {type: String, required: true},
    isRequired: {type: Boolean, required: true},
    isPrerqSat: {type: Boolean, required: true},
    sessions: [{
        section: {type: Number, required: true},
        prof: {type: String, required: true},
        day: {type: String, required: true},
        time: {type: Number, required: true},
        loc: {type: String, required :true},
        isConflicted:{type: Boolean, required: true}

        }]
}, {
    _id: true
});


const User = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    major: {type: String, required: true},
    year: {type: Number, required: true},
}, {
    _id: true
})


const mongooseOpts = {
	useNewUrlParser: true,  
	useUnifiedTopology: true
  };


mongoose.model('Course', Course)
mongoose.model('User', User)

mongoose.connect( '', mongooseOpts, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to database'); 
  }
});
import mongoose from 'mongoose';

const Course = new mongoose.Schema({
    name: {type: String, required: true},
    isRequired: {type: Boolean, required: true},
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
        }]
}, {
    _id: true
});



const mongooseOpts = {
	useNewUrlParser: true,  
	useUnifiedTopology: true
  };


mongoose.model('Course', Course)
mongoose.model('User', User)

//`${process.env.DB_CONNECTION_STRING}`
mongoose.connect( `${process.env.DB_CONNECTION_STRING}`, mongooseOpts, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to database'); 
  }
});
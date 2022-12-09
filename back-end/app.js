const cors= require('cors')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

require('dotenv/config');
app.use(bodyParser.json());
corsOptions = {
  origin: "*"
}
app.use(cors(corsOptions));

// Add Access Control Allow Origin headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



// Import Routes
const courseRoute = require('./routes/courses');
const userRoute = require('./routes/users');
app.use('/courses', courseRoute);
app.use('/users', userRoute);

// routes
app.get('/', (req, res) => {
  console.log("hello")
  res.send('Hello World!');
});

// connect to db
mongoose.connect(
    process.env.DB_CONNECTION_STRING,
    { useNewUrlParser: true},
    () => console.log('connected to db')
);
 
app.listen(process.env.PORT);
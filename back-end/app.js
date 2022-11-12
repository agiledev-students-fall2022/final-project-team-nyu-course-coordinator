


// export the express app we created to make it available to other modules
module.exports = app
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/posts');
const courseRoute = require('./routes/courses');
const userRoute = require('./routes/users');
app.use('/posts', postsRoute);
app.use('/courses', courseRoute);
app.use('/users', userRoute);

// routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true},
    () => console.log('connected to db')
);
 
app.listen(3001);

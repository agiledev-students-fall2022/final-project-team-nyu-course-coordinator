const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors= require('cors')
const app = express();
app.use(cors())
require('dotenv/config');
app.use(bodyParser.json());
const cors = require('cors');
corsOptions = {
  origin: ["http://165.22.184.0:4000/"]
}
express.use(cors(corsOptions));

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
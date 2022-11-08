// import and instantiate express
const express = require("express") // CommonJS import style!
const data = require('./data');

const app = express() // instantiate an Express object
// Routes

// sample code
app.use('/EditCart', (req, res, next) => {
    const filters = req.query;
    const filteredUsers = data.filter(user => {
      let isValid = true;
      for (key in filters) {
        console.log(key, user[key], filters[key]);
        isValid = isValid && user[key] == filters[key];
      }
      return isValid;
    });
    res.send(filteredUsers);
  });
// end of sample code

// export the express app we created to make it available to other modules
module.exports = app
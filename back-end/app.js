// import and instantiate express
const { default: axios } = require("axios");
const express = require("express") // CommonJS import style!
const data = require('./data');

const app = express() // instantiate an Express object
// Routes

// sample code
app.use('/AllClasses', (req, res, next) => {
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

app.get("/AllClasses", (req, res, next) => {
  axios
    .get("https://my.api.mockaroo.com/CourseData?key=ce44b840")
    .then(apiResponse => res.json(apiResponse.data))
    .catch(err => next(err))
})


// export the express app we created to make it available to other modules
module.exports = app
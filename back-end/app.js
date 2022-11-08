// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const path = require('path');

const bodyParser= require('body-parser')

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// we will put some server logic here later...
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



const Allcourses = 
    [{ name: "CSCI 480- Agile Development and DevOps", 
        isRequired: true, 
        isPrereqSat: true, 
        sessions:
          [{section: 2,
            prof: "John Doe",
            day: "Monday, Wednesday",
            time: 10301145,
            loc: "Silver 420",
            isConflicted: true},
          {section: 4,
            prof: "John Doe",
            day: "Tuesday, Thursday",
            time: 12301345,
            loc: "Silver 409",
            isConflicted: true}]
      },
      { name: "MATH 121 - Discrete Mathematics", 
        isRequired: true, 
        isPrereqSat: true, 
        sessions:
          [{section: 2,
            prof: "John Doe",
            day: "Monday, Wednesday",
            time: 10301145,
            loc: "Silver 420",
            isConflicted: true},
          {section: 4,
            prof: "John Doe",
            day: "Tuesday, Thursday",
            time: 12301345,
            loc: "Silver 409",
            isConflicted: false}]
      },
      { name: "MATH 200 - Calculus IV", 
        isRequired: false, 
        isPrereqSat: false, 
        sessions:
          [{section: 2,
            prof: "John Doe",
            day: "Monday, Wednesday",
            time: 10301145,
            loc: "Silver 420",
            isConflicted: false},
          {section: 4,
            prof: "John Doe",
            day: "Tuesday, Thursday",
            time: 12301345,
            loc: "Silver 409",
            isConflicted: false}]
      }]



app.get('/dfg', async function(req, res){
  console.log("HEY")
  res.header('Access-Control-Allow-Origin: *');

  // const cart = await Allcourses.find({}).exec()
  const cart= Allcourses
  const data = cart.map(c => {
      return {name: c.name, 
              isRequired: c.isRequired, 
              isPrereqSat: c.isPrereqSat, 
              sessions: c.sessions.map(s => {
                return{
                  section: s.section,
                  prof: s.prof, 
                  day: s.day, 
                  time: s.time, 
                  loc: s.loc, 
                  isConflicted: s.isConflicted
                }
              })
      }
    })
    
  res.json(data)
  console.log(res.json(data))

})
    

app.get('/Allclasses/search-course', async function(req, res){
   const name= req.query.name
   let newCourse = await AllCourses.find({name: name}).exec()
   let sessions = newCourses.sessions.map(s=> {
      return {section: s.section, prof: s.prof, day: s.day, time: s.time, loc: s.loc, isConflicted: s.isConflicted}
   })
   const data = newCourse.map(c => {
      return {name: c.name, isRequired: c.isRequired, isPrereqSat: c.isPrereqSat, sessions: sessions}
   })
   res.json(data)
})




// export the express app we created to make it available to other modules
module.exports = app
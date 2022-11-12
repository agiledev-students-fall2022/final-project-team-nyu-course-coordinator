const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors= require('cors')
app.use(cors())
require('dotenv/config');
app.use(bodyParser.json());

// Import Routes
const courseRoute = require('./routes/courses');
const userRoute = require('./routes/users');
app.use('/courses', courseRoute);
app.use('/users', userRoute);

// routes
app.get('/df', (req, res) => {
  console.log("hello")
  res.send('Hello World!');
});

// connect to db
mongoose.connect(
    process.env.DB_CONNECTION_STRING,
    { useNewUrlParser: true},
    () => console.log('connected to db')
);
 
app.listen(3001);

//////////////////////////// PLEASE MAKE SURE EVERYTHING UNDER THIS LINE IS COMMENTED OUT, OR ELSE IT WONT RUN ////////////////////////////


// require('./db-schema')
// const mongoose= require('mongoose')
// const Course = mongoose.model('Course')
// const express = require("express") 
// const app = express() 
// const path = require('path');
// const bodyParser= require('body-parser')
// const cors= require('cors')

// app.use(cors())
// app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({extended: true}))

// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));



// app.get('/load-courses', async function(req, res){
  
//   const cart = await Course.find({}).exec()
//   // const cart= Allcourses
//   const data = cart.map(c => {
//       return {name: c.name, 
//               isRequired: c.isRequired, 
//               isPrereqSat: c.isPrereqSat, 
//               sessions: c.sessions.map(s => {
//                 return{
//                   section: s.section,
//                   prof: s.prof, 
//                   day: s.day, 
//                   time: s.time, 
//                   loc: s.loc, 
//                   isConflicted: s.isConflicted
//                 }
//               })
//       }
//     })
//   res.json(data)
// })
    
// // search and add the desired course
// app.get('/Allclasses/add', async function(req, res){
//    const name= req.query.name
//    //Catalog = db that contains all classes? or fetch indiviually from Albert?
//    let newCourse = await Catalog.find({"name": {"$regex":name, "$options":"i"}}).exec()
//    await newCourse.save(async function(err, saved){
//       if (err){
//         console.log(err);
//         res.send({"error": err});
//         } else {
//           const courses = await Course.find({}).exec();
//           const data = courses.map(c => {
//             return {name: c.name, 
//                     isRequired: c.isRequired, 
//                     isPrereqSat: c.isPrereqSat, 
//                     sessions: c.sessions.map(s => {
//                       return{
//                         section: s.section,
//                         prof: s.prof, 
//                         day: s.day, 
//                         time: s.time, 
//                         loc: s.loc, 
//                         isConflicted: s.isConflicted
//                       }
//                     })
//             }
//           })
//            res.json(data)
//         }
//    })
   
// })

// app.get('/Allclasses/remove', async function(req, res){
//   const id= req.query.id
//   let updatedCart = await Course.findByIdAndDelete({_id: id}).exec()
//   const data = updatedCart.map(c => {
//    return {name: c.name, 
//            isRequired: c.isRequired, 
//            isPrereqSat: c.isPrereqSat, 
//            sessions: c.sessions.map(s => {
//              return{
//                section: s.section,
//                prof: s.prof, 
//                day: s.day, 
//                time: s.time, 
//                loc: s.loc, 
//                isConflicted: s.isConflicted
//              }
//            })
//    }
//  })
//   res.json(data)
// })
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import courses from './routes/courses.js';

const app = express();
app.use(bodyParser.json())
app.use(cors());

app.use('/courses', courses);

const CONNECTION_URL = 'mongodb+srv://user:pass@cluster1.edq4z0y.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 3001;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);
// import express from 'express';
// const app = express();
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import('dotenv/config');
// app.use(bodyParser.json());

// // Import Routes
// import courseRoute from './routes/courses.js';
// //const courseRoute = require('./routes/courses');
// import userRoute from './routes/users.js';
// app.use('/courses', courseRoute);
// app.use('/users', userRoute);

// // routes
// // app.get('/', (req, res) => {
// //   res.send('Hello World!');
// // });

// // connect to db
// mongoose.connect(
//     process.env.DB_CONNECTION_STRING,
//     { useNewUrlParser: true},
//     () => console.log('connected to db')
// );
 
// app.listen(3001);

// //////////////////////////// PLEASE MAKE SURE EVERYTHING UNDER THIS LINE IS COMMENTED OUT, OR ELSE IT WONT RUN ////////////////////////////


// // require('./db-schema')
// // const mongoose= require('mongoose')
// // const Course = mongoose.model('Course')
// // const express = require("express") 
// // const app = express() 
// // const path = require('path');
// // const bodyParser= require('body-parser')
// // const cors= require('cors')

// // app.use(cors())
// // app.use(express.urlencoded({ extended: false }));
// // app.use(bodyParser.urlencoded({extended: true}))

// // app.use(express.json());
// // app.use(express.static(path.join(__dirname, 'public')));



// // const Allcourses = 
// //     [{ name: "CSCI 480- Agile Development and DevOps", 
// //         isRequired: true, 
// //         isPrereqSat: true, 
// //         sessions:
// //           [{section: 2,
// //             prof: "John Doe",
// //             day: "Monday, Wednesday",
// //             time: 10301145,
// //             loc: "Silver 420",
// //             isConflicted: true},
// //           {section: 4,
// //             prof: "John Doe",
// //             day: "Tuesday, Thursday",
// //             time: 12301345,
// //             loc: "Silver 409",
// //             isConflicted: true}]
// //       },
// //       { name: "MATH 121 - Discrete Mathematics", 
// //         isRequired: true, 
// //         isPrereqSat: true, 
// //         sessions:
// //           [{section: 2,
// //             prof: "John Doe",
// //             day: "Monday, Wednesday",
// //             time: 10301145,
// //             loc: "Silver 420",
// //             isConflicted: true},
// //           {section: 4,
// //             prof: "John Doe",
// //             day: "Tuesday, Thursday",
// //             time: 12301345,
// //             loc: "Silver 409",
// //             isConflicted: false}]
// //       },
// //       { name: "MATH 200 - Calculus IV", 
// //         isRequired: false, 
// //         isPrereqSat: false, 
// //         sessions:
// //           [{section: 2,
// //             prof: "John Doe",
// //             day: "Monday, Wednesday",
// //             time: 10301145,
// //             loc: "Silver 420",
// //             isConflicted: false},
// //           {section: 4,
// //             prof: "John Doe",
// //             day: "Tuesday, Thursday",
// //             time: 12301345,
// //             loc: "Silver 409",
// //             isConflicted: false}]
// //       }]

// // const addThisCourseEx= [
// //   { name: "Core 400 - Expressive Culture", 
// //     isRequired: true, 
// //     isPrereqSat: true, 
// //     sessions:
// //       [{section: 2,
// //         prof: "John Doe",
// //         day: "Monday, Wednesday",
// //         time: 10301145,
// //         loc: "Silver 420",
// //         isConflicted: false},
// //       {section: 4,
// //         prof: "John Doe",
// //         day: "Tuesday, Thursday",
// //         time: 12301345,
// //         loc: "Silver 409",
// //         isConflicted: false}]
// //   }
// // ]



// // app.get('/load-courses', async function(req, res){
  
// //   const cart = await Course.find({}).exec()
// //   // const cart= Allcourses
// //   const data = cart.map(c => {
// //       return {name: c.name, 
// //               isRequired: c.isRequired, 
// //               isPrereqSat: c.isPrereqSat, 
// //               sessions: c.sessions.map(s => {
// //                 return{
// //                   section: s.section,
// //                   prof: s.prof, 
// //                   day: s.day, 
// //                   time: s.time, 
// //                   loc: s.loc, 
// //                   isConflicted: s.isConflicted
// //                 }
// //               })
// //       }
// //     })
// //   res.json(data)
// // })
    
// // // search and add the desired course
// // app.get('/Allclasses/add', async function(req, res){
// //    const name= req.query.name
// //    //Catalog = db that contains all classes? or fetch indiviually from Albert?
// //    let newCourse = await Catalog.find({"name": {"$regex":name, "$options":"i"}}).exec()
// //    await newCourse.save(async function(err, saved){
// //       if (err){
// //         console.log(err);
// //         res.send({"error": err});
// //         } else {
// //           const courses = await Course.find({}).exec();
// //           const data = courses.map(c => {
// //             return {name: c.name, 
// //                     isRequired: c.isRequired, 
// //                     isPrereqSat: c.isPrereqSat, 
// //                     sessions: c.sessions.map(s => {
// //                       return{
// //                         section: s.section,
// //                         prof: s.prof, 
// //                         day: s.day, 
// //                         time: s.time, 
// //                         loc: s.loc, 
// //                         isConflicted: s.isConflicted
// //                       }
// //                     })
// //             }
// //           })
// //            res.json(data)
// //         }
// //    })
   
// // })

// // app.get('/Allclasses/remove', async function(req, res){
// //   const id= req.query.id
// //   let updatedCart = await Course.findByIdAndDelete({_id: id}).exec()
// //   const data = updatedCart.map(c => {
// //    return {name: c.name, 
// //            isRequired: c.isRequired, 
// //            isPrereqSat: c.isPrereqSat, 
// //            sessions: c.sessions.map(s => {
// //              return{
// //                section: s.section,
// //                prof: s.prof, 
// //                day: s.day, 
// //                time: s.time, 
// //                loc: s.loc, 
// //                isConflicted: s.isConflicted
// //              }
// //            })
// //    }
// //  })
// //   res.json(data)
// // })
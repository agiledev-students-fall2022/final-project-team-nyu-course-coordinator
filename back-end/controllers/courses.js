const Course = require('../models/Course');
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// shows all major courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// shows specific major course
const getCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findById(id);
    res.status(200).json(course);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// // // creates a new course?? from non major couses to major courses (doesn't make any sense)
// // export const createCourse = async (req, res) => {
// //   const course = req.body;
// //   const newCourse = new Course(course);
// //   try {
// //     await newCourse.save();
// //     res.status(201).json(newCourse);
// //   } catch (error) {
// //     res.status(409).json({ message: error.message });
// //   }
// // }

// // delete non major course  
// export const deleteCourse = async (req, res) => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No course with id: ${id}`);
//   await Course.findByIdAndRemove(id);
//   res.json({ message: "Course deleted successfully." });
// }

// changes the section of a course
const changeSection = async (req, res) => {
  const { id } = req.params;
  const { section } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No course with id: ${id}`);
  const updatedCourse = await Course.findByIdAndUpdate(id, { section }, { new: true });
  res.json(updatedCourse);
}

module.exports = {
  getCourses,
  getCourse,
  changeSection 
}
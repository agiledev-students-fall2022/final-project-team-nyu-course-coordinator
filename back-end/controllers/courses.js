import Courses from '../models/Course.js';
import express from 'express';
// import mongoose from 'mongoose';

const router = express.Router();

// shows all courses
export const getCourses = async (req, res) => {
  try {
    const courses = await Courses.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// shows specific major course
export const getCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Courses.findById(id);
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
// export const changeSection = async (req, res) => {
//   const { id } = req.params;
//   const { section } = req.body;
//   if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No course with id: ${id}`);
//   const updatedCourse = await Courses.findByIdAndUpdate(id, { section }, { new: true });
//   res.json(updatedCourse);
// }

export default router;
const Course = require('../models/Course');
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// get all courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// get a specific course
const getCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findById(id);
    res.status(200).json(course);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

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
import Course from '../models/course';
import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createCourse = async (req, res) => {
  const course = req.body;
  const newCourse = new Course(course);
  try {
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const deleteCourse = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No course with id: ${id}`);
  await Course.findByIdAndRemove(id);
  res.json({ message: "Course deleted successfully." });
}

export const changeSection = async (req, res) => {
  const { id } = req.params;
  const { section } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No course with id: ${id}`);
  const updatedCourse = await Course.findByIdAndUpdate(id, { section }, { new: true });
  res.json(updatedCourse);
}


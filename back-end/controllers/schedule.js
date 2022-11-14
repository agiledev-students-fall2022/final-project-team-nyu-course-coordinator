import Schedule from '../models/schedule';
import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

export const addToSchedule = async (req, res) => {

  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No course with id: ${id}`);
  const updatedCourse = await Course.findByIdAndUpdate(id, { schedule: true }, { new: true });
  res.json(updatedCourse);
}

export const removeFromSchedule = async (req, res) => {
  console.log("removing!!")
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No course with id: ${id}`);
  const updatedCourse = await Course.findByIdAndUpdate(id, { schedule: false }, { new: true });
  res.json(updatedCourse);
}
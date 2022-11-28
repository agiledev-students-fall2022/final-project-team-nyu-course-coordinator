const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const addToSchedule = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No course with id: ${id}`);
  const updatedCourse = await Course.findByIdAndUpdate(id, { schedule: true }, { new: true });
  res.json(updatedCourse);
}

const removeFromSchedule = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No course with id: ${id}`);
  const updatedCourse = await Course.findByIdAndUpdate(id, { schedule: false }, { new: true });
  res.json(updatedCourse);
}

module.exports = {
  addToSchedule,
  removeFromSchedule
}
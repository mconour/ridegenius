// routes/tasks.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// CREATE: Create a new task
router.post('/', async (req, res) => {
  try {
    const { title, description, category, priority, dueDate } = req.body;

    const newTask = new Task({
      title,
      description,
      category,
      priority,
      dueDate,
      user: req.user._id, 
    });

    const savedTask = await newTask.save();

    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ: Get all tasks for a specific user
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id }); // Filter tasks by user

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE: Update a specific task by ID
router.put('/:taskId', async (req, res) => {
  try {
    const { title, description, category, priority, dueDate, completed } = req.body;
    const taskId = req.params.taskId;

    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      {
        title,
        description,
        category,
        priority,
        dueDate,
        completed,
      },
      { new: true } // Return the updated task
    );

    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE: Delete a specific task by ID
router.delete('/:taskId', async (req, res) => {
  try {
    const taskId = req.params.taskId;

    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
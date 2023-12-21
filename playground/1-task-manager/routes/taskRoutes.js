const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

router.post('/tasks', tasksController.createTask);
router.get('/tasks', tasksController.getAllTasks);

// Get Task by ID
router.get('/tasks/:id', tasksController.getTaskById);

// Update Task
router.patch('/tasks/:id', tasksController.updateTask);

// Delete Task
router.delete('/tasks/:id', tasksController.deleteTask);

module.exports = router;

const Task = require('../models/taskModel');
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

exports.createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json(tasks);
});

// Get Task by ID
exports.getTaskById = asyncWrapper(async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    // const task = await Task.findOne({ _id: req.params.id })
    if (!task) {
        return next(createCustomError(`No task with id : ${req.params.id}`, 404))
    }
    res.status(200).json(task);
});

// Update Task
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
                runValidators: true
            }
        );
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Task
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

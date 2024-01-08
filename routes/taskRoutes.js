const express = require('express');
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware'); // Import the authentication middleware

const router = express.Router();

// Protected routes requiring authentication
router.get('/', authMiddleware.verifyToken, taskController.getTasks);
router.post('/', authMiddleware.verifyToken, taskController.createTask);
router.put('/:taskId', authMiddleware.verifyToken, taskController.updateTask);
router.delete('/:taskId', authMiddleware.verifyToken, taskController.deleteTask);

// Add more routes as needed
module.exports = router;
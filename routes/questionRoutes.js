// routes/questionRoutes.js

const express = require('express');
const router = express.Router();
const questionController = require('../controller/questionsController');

// Route to create a new question
router.post('/', questionController.createQuestion);

// Route to get all questions
router.get('/', questionController.getAllQuestions);

// Route to get a single question by ID
router.get('/:id', questionController.getQuestionById);

// Route to update a question by ID
router.put('/:id', questionController.updateQuestion);

// Route to delete a question by ID
router.delete('/:id', questionController.deleteQuestion);

module.exports = router;

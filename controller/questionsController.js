// controllers/questionController.js

const Question = require('../model/questionSchema');

// Controller function to create a new question
exports.createQuestion = async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    console.error('Error creating question', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to get all questions
exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    console.error('Error fetching questions', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to get a single question by ID
exports.getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.json(question);
  } catch (err) {
    console.error('Error fetching question by ID', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to update a question by ID
exports.updateQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.json(question);
  } catch (err) {
    console.error('Error updating question', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to delete a question by ID
exports.deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.json({ message: 'Question deleted successfully' });
  } catch (err) {
    console.error('Error deleting question', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

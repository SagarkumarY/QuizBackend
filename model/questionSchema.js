const mongoose = require('mongoose');

// Define the schema for a single question
const questionSchema = new mongoose.Schema({
  numb: {
    type: Number,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

// Define the model for the questions collection
const Question = mongoose.model('Question', questionSchema);

module.exports = Question;

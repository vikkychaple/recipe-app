const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  ingredients: [String],
  instructions: { type: String, required: true },
  image: { type: String },
});

module.exports = mongoose.model('Recipe', recipeSchema);

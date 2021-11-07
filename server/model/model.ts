const mongoose = require('./');

const propertySchema = new mongoose.Schema({
  name: String,
  imageURL: String,
  description: String,
  price: Number,
  beds: Number,
  baths: Number,
  type: String,
});

module.exports = mongoose.model('Property', propertySchema);

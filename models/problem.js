const mongoose = require('mongoose');

const problemSchema = mongoose.Schema({
  title: {type: String, required: 'Please enter a title'},
  issue: {type: String, required: 'Please enter the issue' },
  age: {type: Number },
  location: {type: String }
});

problemSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('problem', problemSchema);

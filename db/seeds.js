const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { db, env } = require('../config/environment');
const User      = require('../models/user');

User.collection.drop();

const problemData = [
  {
    title: 'React is a bit tricky',
    issue: 'Trying to get to grips with rendering components',
    category: 'Front-end frameworks',
    age: 34,
    location: 'London'
  }
];

const userData = [{
  name: 'Mark',
  username: 'Mark',
  email: 'm@m',
  password: 'm',
  passwordConfirmation: 'm',
  problems: [problemData[0]]
}];

mongoose.connect(db[env])
  .then(() => User.create(userData))
  .then(users => console.log(`${users.length} users created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());

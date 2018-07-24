const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { db, env } = require('../config/environment');
const User = require('../models/user');
const Problem = require('../models/problem');


const problemData = [
  {
    title: 'Can not sort this out',
    issue: 'I find React a bit tricky',
    age: 33,
    location: 'UK'
  }
];

const userData = [{
  name: 'Mark',
  username: 'Mark',
  email: 'm@m',
  password: 'm',
  passwordConfirmation: 'm'
}];

mongoose.connect(db[env])
  .then(db => db.dropDatabase())
  .then(() => Problem.create(problemData))
  .then(() => User.create(userData))
  .then(users => console.log(`${users.length} users created!`))
  .then(problems => console.log(`${problems.length} problems created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());

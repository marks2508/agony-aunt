const Problem = require('../models/problem');
const User = require('../models/user');

function problemsCreate(req, res, next) {
  User
    .findById(req.currentUser._id)
    .exec()
    .then(user => {
      if(!user) return res.notFound();
      const problem = user.problems.create(req.body);
      user.problems.push(problem);
      return user.save()
        .then(() => res.json(problem));
    })
    .catch(next);
}

function problemsShow(req, res, next) {
  User
    .findById(req.currentUser.id)
    .exec()
    .then(user => {
      if(!user) return res.notFound();
      const problem = user.problems.id(req.params.id);
      return res.status(200).json(problem);
    })
    .catch(next);
}

function problemsUpdate(req, res, next) {
  Problem
    .findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(problem => res.status(200).json(problem))
    .catch(next);
}

function problemsDelete(req, res, next) {
  Problem
    .findById(req.params.id)
    .exec()
    .then((problem) => {
      if(!problem) return res.notFound();
      return problem.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

function problemsWalksCreate(req, res, next) {
  req.body.distance = parseFloat(req.body.distance);
  User
    .findById(req.currentUser._id)
    .exec()
    .then(user => {
      if(!user) return res.notFound();
      const problem  = user.problems.id(req.params.id);
      const walk = problem.walks.create(req.body);
      problem.walks.push(walk);
      user.save();
      return walk;
    })
    .then(walk => res.status(201).json(walk))
    .catch(next);
}

module.exports = {
  create: problemsCreate,
  show: problemsShow,
  update: problemsUpdate,
  delete: problemsDelete,
  addWalk: problemsWalksCreate
};

const Problem = require('../models/user');
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

function problemsIndex(req, res, next) {
  Problem
    .find()
    .exec()
    .then(problems => res.json(problems))
    .catch(next);
}

function problemsCommentsCreate(req, res, next) {
  User
    .findById(req.currentUser._id)
    .exec()
    .then(user => {
      if(!user) return res.notFound();
      const problem  = user.problems.id(req.params.id);
      const comment = problem.comments.create(req.body);
      problem.comments.push(comment);
      user.save();
      return comment;
    })
    .then(comment => res.status(201).json(comment))
    .catch(next);
}

module.exports = {
  index: problemsIndex,
  create: problemsCreate,
  show: problemsShow,
  update: problemsUpdate,
  delete: problemsDelete,
  addComment: problemsCommentsCreate
};

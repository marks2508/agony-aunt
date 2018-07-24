const Problem = require('../models/user');

function problemsIndex(req, res, next) {
  Problem
    .find()
    .exec()
    .then(problems => res.json(problems))
    .catch(next);
}

function problemsCreate(req, res, next) {
  Problem
    .create(req.body)
    .then(problem => res.status(201).json(problem))
    .catch(next);
}

function problemsShow(req, res, next) {
  Problem
    .findById(req.params.id)
    .exec()
    .then((problem) => {
      if (!problem) return res.notFound();
      res.json(problem);
    })
    .catch(next);
}

function problemsUpdate(req, res, next) {
  Problem
    .findByIdAndUpdate(req.params.id, req.body, {new: true})
    .exec()
    .then(problem => res.status(200).json(problem))
    .catch(next);
}

function problemsDelete(req, res, next) {
  Problem
    .findById(req.params.id)
    .exec()
    .then((problem) => {
      if (!problem) return res.notFound();
      return problem.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}


module.exports = {
  index: problemsIndex,
  create: problemsCreate,
  show: problemsShow,
  update: problemsUpdate,
  delete: problemsDelete
};

const User = require('../models/user');

function commentsIndex(req, res, next) {
  User
    .find()
    .exec()
    .then(comments => res.json(comments))
    .catch(next);
}

function commentsCreate(req, res, next) {
  req.body.date     = new Date();
  User
    .findById(req.currentUser._id)
    .exec()
    .then(user => {
      if(!user) return res.notFound();
      const comment = user.comments.create(req.body);
      user.comments.push(comment);
      user.save();
      return comment;
    })
    .then(comment => res.status(201).json(comment))
    .catch(next);
}

function commentsShow(req, res, next) {
  User
    .findById(req.currentUser._id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      const dog = user.dogs.id(req.params.dogId);
      const comment = dog.comments.id(req.params.commentId);
      res.json(comment);
    })
    .catch(next);
}

function commentsUpdate(req, res, next) {
  User
    .findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(comment => res.status(200).json(comment))
    .catch(next);
}

function commentsDelete(req, res, next) {
  User
    .findById(req.currentUser._id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      const comment = user.comments.id(req.params.id);
      comment.remove();
      return user.save();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: commentsIndex,
  create: commentsCreate,
  show: commentsShow,
  update: commentsUpdate,
  delete: commentsDelete
};

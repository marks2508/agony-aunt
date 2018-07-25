const router = require('express').Router();
const comments = require('../controllers/comments');
const problems = require('../controllers/problems');
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/problems')
  .post(secureRoute, problems.create);

router.route('/problems/:id')
  .get(secureRoute, problems.show)
  .put(problems.update)
  .delete(problems.delete);

router.route('/problems/:id/comments')
  .post(secureRoute, problems.addComment);

router.route('/problems/:problemId/comments/:commentId')
  .get(secureRoute, comments.show)
  .put(secureRoute, comments.update)
  .delete(secureRoute, comments.delete);

router.route('/users/:id')
  .get(users.show)
  .put(users.update);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;

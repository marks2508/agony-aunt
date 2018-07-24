const router = require('express').Router();
const problems = require('../controllers/problems');
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');


router.route('/problems/new')
  .post(problems.create);

router.route('/problems/:id')
  .get(problems.show)
  .put(problems.update)
  .delete(secureRoute, problems.delete);

router.route('/users/:id')
  .get(users.show)
  .put(users.update);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;

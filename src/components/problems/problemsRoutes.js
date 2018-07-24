import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import ProtectedRoute from '../utility/ProtectedRoute';

import ProblemsIndex from './problemsIndex';
import ProblemsShow from './problemsShow';
import ProblemsNew from './problemsNew';
import ProblemsEdit from './problemsEdit';

const ProblemsRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProblemsIndex} />
      <Route path="/problems/new" component={ProblemsNew} />
      <Route path="/problems/:id/edit" component={ProblemsEdit} />
      <Route path="/problems/:id" component={ProblemsShow} />
    </Switch>
  );
};

export default ProblemsRoutes;

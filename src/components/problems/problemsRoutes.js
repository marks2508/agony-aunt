import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import ProtectedRoute from '../utility/ProtectedRoute';

import ProblemsIndex from './ProblemsIndex';
import ProblemsShow from './ProblemsShow';
import ProblemsNew from './ProblemsNew';
import ProblemsEdit from './ProblemsEdit';

const ProblemsRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProblemsIndex} />
      <Route path="/orchids/new" component={ProblemsNew} />
      <Route path="/orchids/:id/edit" component={ProblemsEdit} />
      <Route path="/orchids/:id" component={ProblemsShow} />
    </Switch>
  );
};

export default ProblemsRoutes;

import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/auth/login';
import Register from './components/auth/register';
import Profile from './components/profile/profileShow';
import Navbar from './components/utility/navBar';
import ProblemsNew from './components/problems/problemsNew';
import ProblemsShow from './components/problems/problemsShow';
import CommentsShow from './components/comments/commentsShow';
import CommentsNew from './components/comments/commentsNew';
import Homepage from './components/utility/homepage';
import ProblemsIndex from './components/problems/problemsIndex';

import './scss/style.scss';
import 'font-awesome/css/font-awesome.css';
import 'react-bootstrap';

class App extends React.Component {


  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <main>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/profile" component={Profile} />
              <Route path="/problems/new" component={ProblemsNew} />
              <Route path="/problems/:problemId/comments/:commentId" component={CommentsShow} />
              <Route path="/problems/:id/comments" component={CommentsNew} />
              <Route path="/problems/:id" component={ProblemsShow} />
              <Route path="/problems" component={ProblemsIndex} />
              <Route exact path="/" component={ProblemsIndex} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

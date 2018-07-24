import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/utility/Navbar';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Profile from './components/profile/profileShow';
import ProblemNew from './components/problems/problemNew';
import ProblemShow from './components/problems/problemShow';
import Homepage from './components/utility/homepage';
import './scss/style.scss';
import 'font-awesome/css/font-awesome.css';


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
              <Route path="/problems/new" component={ProblemNew} />
              <Route path="/problems/:problemId" component={ProblemShow} />
              <Route exact path="/" component={Homepage} />
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

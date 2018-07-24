import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProblemsRoutes from './components/problems/problemsRoutes';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Navbar from './components/utility/Navbar';
import SearchBar from './components/utility/searchBar';
import ProblemGrid from './components/utility/problemGrid';

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
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <SearchBar />
            <ProblemGrid />
            <ProblemsRoutes />
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

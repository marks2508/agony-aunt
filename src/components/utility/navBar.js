import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';


const Navbar = ({ history }) => {
  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          { Auth.isAuthenticated() && <Link to="/" className="nav-item nav-link"></Link>}
        </div>
        <div className="navbar-nav ml-md-auto">
          { Auth.isAuthenticated() && <Link to="/problems/new" className="nav-item nav-link">Add a problem</Link>}
          { !Auth.isAuthenticated() && <Link to="/login" className="nav-item nav-link">Login</Link>}
          { !Auth.isAuthenticated() && <Link to="/register" className="nav-item nav-link">Register</Link>}
          { Auth.isAuthenticated() && <Link to="#" className="logout nav-item nav-link" onClick={logout}>Logout</Link>}
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);

import React from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import Auth from '../../lib/Auth';

class ProfileShow extends React.Component {
  state = {
    user: {
      comments: [],
      problems: []
    }
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${Auth.getPayload().userId}`)
      .then(res => this.setState({user: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.user.problems.map((problem) => ([
            <div key={`${problem.id}-1`} className="card card-outline-primary col-md-4">
              <div className="card-body">
                <h5 className="card-title">{problem.title}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Issue: </strong>{problem.issue}</li>
              </ul>
              <div className="card-body">
                <Link to={`/problems/${problem.id}`} className="card-link">Comment log for {problem.title}</Link>
                <Link to={`problems/${problem.id}/comments`} className="card-link">Add a comment</Link>
                <Link to={'/index'}>Index</Link>
              </div>
            </div>,
            <div key={`${problem.id}-2`} className="card col-md-6">
              <div className="card-body">
              </div>
            </div>]
          ))}
        </div>
      </div>
    );
  }
}

export default ProfileShow;

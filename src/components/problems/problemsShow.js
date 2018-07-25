import React from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import BackButton from '../utility/BackButton';
import Auth from '../../lib/Auth';

class ProblemsShow extends React.Component {
  state = {
    problem: {}
  }
  componentDidMount() {
    Axios
      .get(`/api/problems/${this.props.match.params.id}`, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}})
      .then(res => this.setState({problem: res.data}))
      .catch(err => console.log(err));
  }
  deleteProblem = () => {
    Axios
      .delete(`/api/problems/${this.props.match.params.id}`, {
        headers: {Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Issue</th>
              <th>Category</th>
              <th>Age</th>
              <th>Location</th>
            </tr>
          </thead>
          <td>{this.state.problem.title}</td>
          <td>{this.state.problem.issue}</td>
          <td>{this.state.problem.category}</td>
          <td>{this.state.problem.age}</td>
          <td>{this.state.problem.location}</td>
        </table>
        <BackButton history={this.props.history} />
        { Auth.isAuthenticated() && <Link to={`/problems/${this.state.problem.id}/edit`} className="standard-button"><i className="fa fa-pencil" aria-hidden="true"></i>Edit</Link>}
        { Auth.isAuthenticated() && <button className="main-button" onClick={this.deleteProblem}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>}
      </div>
    );
  }
}

export default ProblemsShow;

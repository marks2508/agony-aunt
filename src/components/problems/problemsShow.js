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
        <h2>{this.state.problem.title}</h2>
        <h2>{this.state.problem.issue}</h2>
        <h2>{this.state.problem.category}</h2>
        <h2>{this.state.problem.age}</h2>
        <h2>{this.state.problem.location}</h2>
        <BackButton history={this.props.history} />
        { Auth.isAuthenticated() && <Link to={`/problems/${this.state.problem.id}/edit`} className="standard-button"><i className="fa fa-pencil" aria-hidden="true"></i>Edit</Link>}
        { Auth.isAuthenticated() && <button className="main-button" onClick={this.deleteProblem}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>}
      </div>
    );
  }
}

export default ProblemsShow;

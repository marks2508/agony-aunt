import React from 'react';
import Axios from 'axios';
import ProblemsForm from './problemsForm';
import Auth from '../../lib/Auth';

class ProblemsNew extends React.Component {
  state = {
    problem: {
      title: '',
      issue: '',
      age: '',
      location: ''
    },
    errors: {}
  }

  handleChange = ({target: {name, value}}) => {
    const problem = Object.assign({}, this.state.problem, {[name]: value});
    const errors = Object.assign({}, this.state.errors, {[name]: ''});
    this.setState({problem, errors});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/problems', this.state.problem, { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/'))
      .catch(err => this.setState({errors: err.response.data.errors}));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="problem-new-title">Add your problem: </h1>
            <ProblemsForm
              history={this.props.history}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              problem={this.state.problem}
              errors={this.state.errors}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProblemsNew;

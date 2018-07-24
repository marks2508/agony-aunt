import React from 'react';
import Axios from 'axios';
import ProblemsForm from './ProblemsForm';

class ProblemsEdit extends React.Component {
  state = {
    problem: {
      title: '',
      issue: '',
      age: '',
      location: ''
    }
  }
  componentDidMount() {
    Axios
      .get(`/api/problems/${this.props.match.params.id}`)
      .then(res => this.setState({ problem: res.data}))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: {name, value}}) => {
    const problem = Object.assign({}, this.state.problem, { [name]: value});
    this.setState({problem});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .put(`/api/problems/${this.props.match.params.id}`, this.state.problem)
      .then(() => this.props.history.push(`/problems/${this.props.match.params.id}`))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <ProblemsForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        problem={this.state.problem}
      />
    );
  }
}

export default ProblemsEdit;

import React from 'react';
import Axios from 'axios';
import CommentsForm from './commentsForm';
import Auth from '../../lib/Auth';
import BackButton from '../utility/BackButton';




class CommentsNew extends React.Component {
  state = {
    comment: {
      advice: ''
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
      .post(`/api/problems/${this.props.match.params.id}/comments`, this.state.comment, { headers: {'Authorization': `Bearer ${Auth.getToken()}` }})
      .then(() => this.props.history.push(`/problems/${this.props.match.params.id}`))
      .catch(err => this.setState({errors: err.response.data.errors}));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="comment-new-advice">Add your advice</h1>
          </div>
          <div className="col-md-6">
            <CommentsForm
              history={this.props.history}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              errors={this.state.errors}
              advice={this.state.comment.advice}
            />
          </div>
          <BackButton />
        </div>
      </div>
    );
  }
}

export default CommentsNew;

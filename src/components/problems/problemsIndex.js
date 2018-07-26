import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class ProblemsIndex extends React.Component {
  state = {
    problems: []
  }

  componentWillMount() {
    Axios
      .get('/api/problems')
      .then(res => this.setState({ problems: res.data}, () => console.log('hello')))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <img className="background" src="https://i1.wp.com/www.yorkvision.co.uk/wp-content/uploads/2013/01/plainaa.jpg?resize=630%2C285" />
        <h1 className="title">Welcome to Agony Aussssnt!</h1>
        <h2 className="sub-title">This is a site where you post your problems and people can offer their advice - all for free!</h2>
        <div className="container">
          <div className="row">
            <Link to="/problems/new" className="main-button">
              <i className="fa fa-plus" aria-hidden="true"></i>Add Problem
            </Link>
            {this.state.problems.map(problem => {
              return (
                <div key={problem.id} className="cards col-md-4">
                  <div className="card-outline">
                    <div className="card-body">
                      <Link to={`/problems/${problem.id}`}><h3 className="card-title">{problem.title}</h3></Link>
                      <p className="card-text">{problem.title}</p>
                      <p className="card-text">{problem.issue}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Age: {problem.age}</li>
                      <li className="list-group-item">Location: {problem.location}</li>
                    </ul>
                    <div className="card-body">
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProblemsIndex;

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
      .then(res => this.setState({ problems: res.data}))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.state.problems.map(problem => {
              return (
                <div key={problem.id} className="cards col-md-4">
                  <div className="card-outline">
                    <div className="card-body">
                      <Link to={`/problems/${problem.id}`}><h3 className="card-title">{problem.title}</h3></Link>
                      <p className="card-text">£{problem.issue}</p>
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

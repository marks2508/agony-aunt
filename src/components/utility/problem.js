import React from 'react';
import { Col } from 'react-bootstrap';

const Problem = ({ title, issue, age, location }) => {
  return (
    <Col md={4}>
      <div className="cards col-md-4">
        <div className="card-outline">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{issue}</p>
            <p className="card-text"></p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Age: {age}</li>
            <li className="list-group-item">Location: {location}</li>
          </ul>
        </div>
      </div>
    </Col>
  );
};

export default Problem;

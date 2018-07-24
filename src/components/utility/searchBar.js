import React from 'react';
import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';

const SearchBar = ({handleSort, handleSearch}) => {
  return (
    <Row>
      <Col md={6}>
        <FormGroup>
          <FormControl componentClass="select" onChange={handleSort}>
            <option value="title|asc">Title (A - Z)</option>
            <option value="title|desc">Title (Z - A)</option>
            <option value="issue|asc">Issue (A - Z)</option>
            <option value="issue|desc">Issue (Z - A)</option>
            <option value="age|desc">Age (High - Low)</option>
            <option value="age|asc">Age (Low - High)</option>
          </FormControl>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <FormControl type="text" placeholder="Search" onChange={handleSearch}/>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default SearchBar;

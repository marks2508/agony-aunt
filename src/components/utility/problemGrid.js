import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import problemData from '../../../models/problem';
import Problem from './problem';
import SearchBar from './searchBar';
import _ from 'lodash';

class ProblemGrid extends React.Component {
  state = {
    problems: problemData,
    sortBy: 'title',
    sortDirection: 'desc',
    query: ''
  };

    handleSort = e => {
      const [sortBy, sortDirection] = e.target.value.split('|');
      console.log(sortBy, sortDirection);
      this.setState({ sortBy, sortDirection});
    }

    handleSearch = e => {
      // console.log(e.target.value);
      this.setState({query: e.target.value}, () => console.log(this.state) );
    }

    sortingAndFiltering = () => {
      const { sortBy, sortDirection, query } = this.state;
      const regex = new RegExp(query, 'i');

      const orderedProblems = _.sortBy(this.state.problems, [sortBy], [sortDirection]);
      const problems = _.filter(orderedProblems, (problem) => regex.test([problem.name, problem.brand]));
      return problems;
    }

    render() {
      // const { orchids } = this.state;
      // console.log('LOGGING Q IN RENDER METHOD ======> ', this.state.query);
      const problems = this.sortingAndFiltering();
      return (
        <Grid>
          <SearchBar
            handleSort={this.handleSort}
            handleSearch={this.handleSearch}
          />
          <Row>
            {problems.map((problem, i) => <Problem key={i} {...problem} />)}
          </Row>
        </Grid>
      );
    }
}

export default ProblemGrid;

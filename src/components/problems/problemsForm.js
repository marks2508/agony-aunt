import React from 'react';
// import BackButton from '../utility/BackButton';


function ProblemsForm({ handleSubmit, handleChange, problem}) {
  return (
    <div className="row">
      <div className="page-banner col-md-12">
      </div>
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={problem.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Issue</label>
          <input
            type="text"
            className="form-control"
            id="issue"
            name="issue"
            value={problem.issue}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={problem.category}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            className="form-control"
            id="age"
            name="age"
            value={problem.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <select
            className="form-control"
            id="location"
            name="location"
            value={problem.location}
            onChange={handleChange}
          >
            <option value="" disabled>Please select</option>
            <option>UK</option>
            <option>USA</option>
          </select>
        </div>
        <button className="btn btn-success">Save</button>
        <br />
        <br />
        {/* <BackButton history={history} /> */}
      </form>
    </div>
  );
}

export default ProblemsForm;

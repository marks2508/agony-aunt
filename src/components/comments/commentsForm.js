import React from 'react';

function WalksForm({ handleSubmit, handleChange }) {
  return (
    <div className="row">
      <div className="page-banner col-md-12">
      </div>
      <form className="col-md-6 problemsForm">
        <div className="form-group problemsForm">
          <label htmlFor="advice">Your advice</label>
          <input
            type="text"
            className="form-control"
            name="advice"
            onChange={handleChange}
            placeholder="Give your advice here" />
        </div>
        <button className="btn btn-success" onClick={handleSubmit}>Save</button>
        <br />
        <br />
        <br />
      </form>
    </div>
  );
}

export default WalksForm;

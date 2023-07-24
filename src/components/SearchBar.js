import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="ui segment search-bar">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            className=""
            placeholder="Search Video"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

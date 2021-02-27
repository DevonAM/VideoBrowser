import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    //call callback from parent component to tell app that user submitted
    //need the term now
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment" style={{ marginTop: "1em" }}>
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

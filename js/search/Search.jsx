import React from "react";
import TextField from "material-ui/TextField";

const Search = props => {
  return (
    <div className="search-comp">
      <h1>Search For Planates,click to get Complete Info!!!</h1>
      <TextField
        hintText="Search Planets"
        floatingLabelText="Planets"
        type="text"
        onChange={event => props.onTextChange(event)}
      />
    </div>
  );
};

export default Search;

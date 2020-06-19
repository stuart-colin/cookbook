import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui form">
        <div className="field">
          <input type="text" name="search" placeholder="Search"></input>
        </div>
      </div>
    );
  }
}

export default SearchBar;

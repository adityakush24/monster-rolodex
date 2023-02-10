import React from "react";
import "./SearchBar.component.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div id="searchBar">
        <input
          type="text"
          id="searchBox"
          placeholder="Search monster"
          onChange={this.props.search}
        />
      </div>
    );
  }
}
export default SearchBar;

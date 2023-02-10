import React from "react";
import "./PaginationStrip.component.css";

class PaginationStrip extends React.Component {
  constructor(props) {
    super(props);
    this.pageSize = 20;
  }

  render() {
    let pageBtns = [];
    let pageCount = Math.ceil(this.props.totalMonsters / this.pageSize);
    for (let i = 1; i <= pageCount; i++) {
      let skip = (i - 1) * this.pageSize;
      let top = this.pageSize;
      pageBtns.push(
        <li>
          <button onClick={() => this.props.updatePage(skip, top)}>{i}</button>
        </li>
      );
    }
    return (
      <nav>
        <ul id="pagination">{pageBtns}</ul>
      </nav>
    );
  }
}

export default PaginationStrip;

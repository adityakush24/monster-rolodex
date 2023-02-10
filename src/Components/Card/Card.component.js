import React from "react";
import "./Card.component.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.monster.image} alt="" />
        <h4>
          {this.props.monster.firstname} {this.props.monster.lastName}
        </h4>
        <p>{this.props.monster.email}</p>
      </div>
    );
  }
}

export default Card;

import React from "react";
import Card from "../Card/Card.component";
import "./CardList.component.css";

class CardList extends React.Component {
  render() {
    return (
      <div id="cardList">
        {this.props.monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;

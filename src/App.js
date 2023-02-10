import React from "react";
import SearchBar from "./Components/SearchBar/SearchBar.component";
import CardList from "./Components/CardList/CardList.component";
import PaginationStrip from "./Components/PaginationStrip/PaginationStrip.component";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.pageSize = 20;
    this.state = {
      monsters: [],
      searchQuery: "",
      totalMonsters: 0
    };
  }

  setSearchQuery = (searchEvent) => {
    this.setState({
      searchQuery: searchEvent.target.value
    });
    setTimeout(() => {
      this.getData(0, this.pageSize);
    })
  };

  getData = (skip, top) => {
    fetch(
      `https://dummyjson.com/users/search?q=${this.state.searchQuery}&skip=${skip}&top=${top}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          monsters: data.users,
          totalMonsters: data.total
        });
      });
  };

  componentDidMount() {
    this.getData(0, this.pageSize);
  }
  
  render() {
    return (
      <div>
        <h1>Monsters Rolodex</h1>
        <SearchBar search={this.setSearchQuery} />
        <CardList monsters={this.state.monsters} />
        <PaginationStrip
          totalMonsters={this.state.totalMonsters}
          updatePage={this.getData}
        />
      </div>
    );
  }
}
export default App;

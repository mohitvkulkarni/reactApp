import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Mohit", age: "23" },
      { name: "Kulkarni", age: "24" },
      { name: "Stephanie", age: "25" }
    ],
    otherState: "Some other state"
  };

  switchNameHandler = newName => {
    console.log("Switch Pressed");
    this.setState({
      persons: [
        { name: newName, age: "23" },
        { name: "Kulkarni", age: "24" },
        { name: "Stephanie", age: "254" }
      ],
      showPersons: false
    });
    console.log(this.state);
  };

  nameChangedHandler = event => {
    console.log("Name Pressed");
    this.setState({
      persons: [
        { name: "Darren", age: "23" },
        { name: "Smith", age: "24" },
        { name: event.target.value, age: "254" }
      ]
    });
    console.log(this.state);
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    const style = {
      backgroundColor: "white",
      border: "4px solid blue",
      font: "inherit",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I am Mohit</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.togglePersonsHandler}>
          Switch Name
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={() => this.switchNameHandler("Rob")}
            >
              My hobby includes killing people
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              changed={this.nameChangedHandler}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;

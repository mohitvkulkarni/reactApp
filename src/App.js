import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Mohit", age: "23", id: "1" },
      { name: "Kulkarni", age: "24", id: "2" },
      { name: "Stephanie", age: "25", id: "3" }
    ],
    otherState: "Some other state"
  };

  deletePersonHandler = indexed => {
    const persons = [...this.state.persons];
    persons.splice(indexed, 1);
    this.setState({ persons: persons });
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

  nameChangedHandler = (event, personID) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === personID;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    console.log("Name Pressed");
    this.setState({
      persons: persons
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => {
                  this.nameChangedHandler(event, person.id);
                }}
                click={() => {
                  this.deletePersonHandler(index);
                }}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am Mohit</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

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

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
         { this.state.persons.map(person => {
            return (<Person
            name={person.name}
            age={person.age} />)
          })}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am Mohit</h1>
        <p>This is really working!</p>
        <button style={style} onClick= {this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

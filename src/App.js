import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium from "radium";

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
      backgroundColor: "green",
      color: "white",
      border: "2px solid green",
      font: "inherit",
      padding: "8px",
      cursor: "pointer",
      ':hover':{
        backgroundColor: "lightgreen",
        color:"black"
      }
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
      style.backgroundColor="Red"
      style[':hover'] = {
        backgroundColor: "orange",
        color:"black"
      }
    }

    let classes = [];

    if(this.state.persons.length <= 2) {
      classes.push("red");
    }
    if(this.state.persons.length<=1){
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I am Mohit</h1>
        <p className = {classes.join(' ')}>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);

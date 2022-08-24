import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:1, name: "Marko", age: 22},
      { id:2, name: "Nikola", age: 27},
      { id:3, name: "Jovan", age: 26}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }
  
  NameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return  <Person 
                click={() => this.deletePersonHandler(index)} 
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.NameChangeHandler(event, person.id)} />
            })}
          </div>
        );
    }

    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <p>This is working !</p>
        <button style={btnStyle} onClick={this.togglePersonHandler}>Show Name</button>
        {persons}
          
      </div>
    );
  }
}

export default App;

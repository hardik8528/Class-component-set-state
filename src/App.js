import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Hardik', age: 18 },
      { name: 'Vishal', age: 19 },
      { name: 'Yash', age: 20 },
    ]
  }

  stateChange = (newName) => {
    this.setState({
      persons: [
        { name: 'Vishal', age: 19 },
        { name: 'Yash', age: 20 },
        { name: newName, age: 18 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Hardik</h1>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].name} >I am IT Student</Person>

        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I am CP Student</Person>

        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.stateChange.bind(this,'HARDIK')}>I am ME Student</Person>

        <div>
          <button onClick={this.stateChange.bind(this,'Hardik❤')}>Switch Student</button>
        </div>
      </div>
    );
  }
}

export default App;

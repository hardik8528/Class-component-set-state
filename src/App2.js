import React, { useState } from 'react';
import './App.css'
import Person from './Person/Person';

function App2() {
    const [personState, setPersonState] = useState({
        persons: [
            { name: 'Hardik', age: 18 },
            { name: 'Vishal', age: 19 },
            { name: 'Yash', age: 20 },
        ]
    })

    const stateChange = () => {
        setPersonState({
            persons: [
                { name: 'Vishal', age: 19 },
                { name: 'Yash', age: 20 },
                { name: 'Hardik', age: 18 },
            ]
        });
    }

    return (
        <div className="App">
            <h1>Hello Hardik</h1>
            <Person name={personState.persons[0].name} age={personState.persons[0].name} >I am IT Student</Person>
            <Person name={personState.persons[1].name} age={personState.persons[1].age}>I am CP Student</Person>
            <Person name={personState.persons[2].name} age={personState.persons[2].age}>I am ME Student</Person>
            <div>
                <button onClick={stateChange}>Switch Student</button>
            </div>
        </div>
    )
};

export default App2

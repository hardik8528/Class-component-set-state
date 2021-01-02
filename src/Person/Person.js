import React from 'react';
import './Person.css'

function Person(props) {
    return (
        <div className='person'>
            <h1 className='h1'>Hello I am {props.name}!!!!</h1>
            <p className='p'> I am {props.age} years old!!!!</p>
            <p className='p'> {props.children}</p>
        </div>
    )
}

export default Person;

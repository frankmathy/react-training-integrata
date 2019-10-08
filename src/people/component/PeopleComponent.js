import React from 'react';
import PersonComponent from './PersonComponent'

let PeopleComponent = (props) => {
    const allPeople = props.people.all().map(person =>
        <li key={person.id}>
            <PersonComponent person={person} detail={true}/>
        </li>
    );
    return (
        <div>
            <ul>
                {allPeople}
            </ul>
        </div>    
    )
}

export default PeopleComponent

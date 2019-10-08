import React from 'react';
import PersonComponent from './PersonComponent'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

let PeopleComponent = (props) => {
    const allPeople = props.people.all().map(person =>
        <PersonComponent person={person} detail={true}/>
    );
    return (
        <Container>
            {allPeople}
        </Container>
    )
}

export default PeopleComponent
